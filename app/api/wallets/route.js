import { connect } from "@/db";
import axios from "axios";
import moment from "moment-timezone";
const { NextResponse } = require("next/server");

export async function POST(req) {
    const data = await req.json()
    let res = {}
    try {
        
        res = await axios(process.env.WALLET, {
            method: "POST",
            headers: {
                'Authorization': process.env.API,
                'Content-Type': 'application/json'
            }
        });
        if (res.data.status === 'success') {

            const conn = await connect();
            const nowInMalaysia = moment.tz('Asia/Kuala_Lumpur').format('YYYY-MM-DD HH:mm:ss');
            const [results, fields] = await conn.execute(
                'INSERT into wallet (email,private,address, time) values (?,?,?,?)',
                [data.email, res.data.result.address, res.data.result.privateKey, nowInMalaysia]
            );
        }

    } catch (error) {
        return NextResponse.json({
            status: "error"
        })
    }


    return NextResponse.json({
        status: "success",
        data: {
            private: res.data.result.privateKey,
            address: res.data.result.address
        }
    })
}

export async function GET(request) {
    try {
        const email = request.url.split('email=')[1];
        // console.log("Before encode",email);
        const encodeEmail = decodeURIComponent(email);
        // console.log("After encode",encodeEmail);
        const conn = await connect();
        // console.log("Connection",conn);

        // change email to user email 
        const [results, fields] = await conn.execute(
            'select email , address, time, (select count(*) from register where email = ?) as regs from wallet where email = ?', [encodeEmail, encodeEmail]
        );
        let data = {};
        if(results.length > 0){
            
            // console.log("Results",results);
            let showNFT = results[0].force 
            if(!showNFT){
                const time1 = moment.tz(results[0].time, "Asia/Kuala_Lumpur");
                const time2 = moment.tz("Asia/Kuala_Lumpur");

                const difference = Math.abs(time2.diff(time1, 'minutes'));
                showNFT = Boolean(results[0].regs && difference > 15)   
            }

            data = {
                "email": results[0].email,
                "address": results[0].address,
                showNFT
            }
            
        }

        
        return NextResponse.json({
            status: results.length > 0 ? "success" : "fail",
            data

        })
    } catch (error) {
        console.error('An error occurred:', error)
        return NextResponse.json({
            status: "error",
            data: {}
        })
    }

}