import { connect } from "@/db";
import axios from "axios";
import moment from "moment-timezone";
const { NextResponse } = require("next/server");

export async function POST(req) {
    const data = await req.json()
    let res = {}
    try {
        
        let formData = new FormData();
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
        console.log(error);
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