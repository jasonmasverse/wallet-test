import { connect } from "@/db";
import { openAsBlob } from 'node:fs' 
import axios from "axios";
import moment from "moment-timezone";
const { NextResponse } = require("next/server");

export async function POST(req) {
    const {to} = await req.json()
    let res = {}
    try {
        // CHANGE TO YOUR IMAGE PATH
        let filePath = process.cwd() + '/data/bg.png'
        const file = await openAsBlob(filePath); // or
        const formData = new FormData();
        formData.append('wallet_address',"0x80a5683c416a5d9807d17f2aD4fF6F4Bb5E6c01F")
        formData.append('to',to)
        formData.append('contract_address', process.env.SC)
        formData.append('file',file, "bg.png");
        formData.append('attributes[0][value]', "DEVDAY_EXAMPLE")
        formData.append('attributes[0][text]',"DEVDAY_EXAMPLE")
        formData.append('name',"DEVDAY_EXAMPLE")
        formData.append('description',"DEVDAY_EXAMPLE")
        const config = {
            headers: {
                'client_id': process.env.API_KEY,
                'client_secret': process.env.API_SECRET,
                'Content-Type': 'multipart/form-data'
            }
        }

        res = await axios.post(`${process.env.SERVICE}certificate/mint-certificate`, formData , config);

        if (res.data.status === 200) {
            
            const nowInMalaysia = moment.tz('Asia/Kuala_Lumpur').format('YYYY-MM-DD HH:mm:ss');
            const data = res.data.result
            const [results, fields] = await conn.execute(
                'INSERT into cert (status , certificate , certificate_image , nonce , wallet_address , transaction_id, name, time) values (?,?,?,?,?,?,?,?)',
                [data.status, data.certificate , data.certificate_image ,data.nonce , to ,data.transactionHash , process.env.CERT_NAME ,data.status ,nowInMalaysia]
            );
        }

        return NextResponse.json({
            status: "success",
            data: {
                
            }
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: "error"
        })
    }
}


export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('tx_id') ?? ""

        console.log("test");
        // change email to user email 
        let res = await axios(`${process.env.SERVICE}certificate/get-certificate?tx_id=${id}`, {
            method: "get",
            headers: {
                'client_id': process.env.API_KEY,
                'client_secret': process.env.API_SECRET,
                'Content-Type': 'application/json'
            },
        });

        console.log(res.data.result[0]);

        return NextResponse.json({
            status: "success",
            data : {}

        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: "error",
            data: {}
        })
    }

}