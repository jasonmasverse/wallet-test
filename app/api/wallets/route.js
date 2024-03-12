import { connect } from "@/db";
import axios from "axios";
import moment from "moment-timezone";
const { NextResponse } = require("next/server");

export async function POST(req) {
    const data = await req.json()
    let res = {}
    try {
        const conn = await connect();
        const [exist,field] = await conn.execute(
            'select count(*) as count from wallet where email = ?', [data.email]
        );
        if(exist[0].count >= 1){
            return NextResponse.json({
                status: "fail",
                data: {
                    message : "Email already exist"
                }
            })
        }

        res = await axios(process.env.WALLET, {
            method: "POST",
            headers: {
                'Authorization': process.env.API,
                'Content-Type': 'application/json'
            }
        });
        if (res.data.status === 'success') {

            const nowInMalaysia = moment.tz('Asia/Kuala_Lumpur').format('YYYY-MM-DD HH:mm:ss');
            const [results, fields] = await conn.execute(
                'INSERT into wallet (email,address,private,time) values (?,?,?,?)',
                [data.email, res.data.result.address, res.data.result.privateKey, nowInMalaysia]
            );
        }

    } catch (error) {
        console.error('An error occurred:', error)
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
            'select email , address from wallet where email = ?', [encodeEmail]
        );
        let data = {};
        if(results.length > 0){

            data = {
                "email": results[0].email,
                "address": results[0].address,
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