import { connect } from "@/db";
const { NextResponse } = require("next/server");

export async function GET(){
    const conn = await connect();

    // const [ results ] = await conn.query("select * from persons"); 

    const [results, fields] = await conn.execute(
        'INSERT into persons (name) values (?)',
        ['Test']
      );
    console.log(results, fields)
    return  NextResponse.json({
        hello : "world"
    })
}