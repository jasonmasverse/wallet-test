import { connect } from "@/db";
import axios from "axios";
const { NextResponse } = require("next/server");

export async function POST(req) {
    const data = await req.json()

    try {
        const res = await axios(process.env.WALLET, {
            method: "POST",
            headers: {
                'Authorization': process.env.API,
                'Content-Type': 'application/json'
            }
        });
        if (res.data.status === 'success') {

            const conn = await connect();
            const [results, fields] = await conn.execute(
                'INSERT into wallet (email,private,address) values (?,?,?)',
                [data, res.data.result.address, res.data.result.privateKey]
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
        const conn = await connect();

        // change email to user email 
        const [results, fields] = await conn.execute(
            'select * from wallet where email = ?', [email]
        );

        const data = results.length > 0 ? results[0] : {}

        return NextResponse.json({
            status: results.length > 0 ? "success" : "fail",
            data

        })
    } catch (error) {
        return NextResponse.json({
            status: "error",
            data: {}
        })
    }

}