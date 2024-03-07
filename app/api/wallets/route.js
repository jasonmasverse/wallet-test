import { connect } from "@/db";
import axios from "axios";
const { NextResponse } = require("next/server");

export async function POST(){
    const conn = await connect();

    console.log(process.env.API)
    try {
        const res = await axios(process.env.WALLET,{
            method: "POST",
            headers : {
                'Authorization' : process.env.API,
                'Content-Type': 'application/json'
            }
        });
        if(res.data.status === 'success'){
             // const [ results ] = await conn.query("select * from persons"); 
            
            const [results, fields] = await conn.execute(
                'INSERT into wallet (email,private,address) values (?,?,?)',
                ["test@email", res.data.result.address, res.data.result.privateKey ]
              );
            // console.log(results, fields)
        }
        
    } catch (error) {
        return  NextResponse.json({
            status : "error"
        })
    }

    
    return  NextResponse.json({
        status : "success"
    })
}

export async function GET(){
    const conn = await connect();

    // change email to user email 
     const [results, fields] = await conn.execute(
        'select * from wallet where email = ?',["test@email"]
    );
   
    const data = results.length > 0 ? results[0] : {}

    return  NextResponse.json({
        status : results.length > 0 ? "success" : "fail",
        data

    })
}