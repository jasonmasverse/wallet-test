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
                'INSERT into register (email,name) values (?,?)',
                [data.email, data.name]
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
        const conn = await connect();

        // change email to user email 
        const [results, fields] = await conn.query('select * from register');

        const data = results.length > 0 ? results[0] : {}

        return NextResponse.json({
            status: "success",
            data

        })
    } catch (error) {
        return NextResponse.json({
            status: "error",
            data: {}
        })
    }

}