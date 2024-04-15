import { connect } from "@/db";
import { openAsBlob } from 'node:fs' 
import axios from "axios";
import moment from "moment-timezone";
const { NextResponse } = require("next/server");

export async function GET(request, { params }) {

    try {
        
        const conn = await connect();
        const [results, fields] = await conn.execute(
            'select * from cert where wallet_address = ? and name = ?', [params.wallet, process.env.CERT_NAME]
        );

        let data = {};
        console.log(results);
        if(results.length > 0){
            data = results
        }

        return NextResponse.json({
            status: results.length > 0 ? "success" : "fail",
            data

        })


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: "error",
            data: {}
        })
    }

}