import { connect } from "@/db";
import axios from "axios";
import moment from "moment-timezone";
const { NextResponse } = require("next/server");

export async function POST(req) {
    const data = await req.json()
    let res = {}

    if(!data?.name || !data?.phone || !data?.ic){
        return NextResponse.json({
            status: "error",
            message: 'missing field'
        })
    }

    try {
        res = await axios(`${process.env.SERVICE}wallet/create-user`, {
            method: "POST",
            headers: {
                'client_id': process.env.API_KEY,
                'client_secret': process.env.API_SECRET,
                'Content-Type': 'application/json'
            },
            data:{
                "name":data.name,
                "email":data.email,
                "ic":data.ic,
                "phone": data.phone
            }
        });

        if (res.data.status === 200) {

            const conn = await connect();
            const nowInMalaysia = moment.tz('Asia/Kuala_Lumpur').format('YYYY-MM-DD HH:mm:ss');
            console.log(data.email, res?.data.result.wallet.wallet_address, data?.phone, data?.name, data?.ic , nowInMalaysia)
            const [results, fields] = await conn.execute(
                'INSERT into wallet (email, address, phone, name , ic , time) values (?,?,?,?,?,?)',
                [data.email, res?.data.result.wallet.wallet_address, data?.phone, data?.name, data?.ic , nowInMalaysia]
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


        // change email to user email 
        const [results, fields] = await conn.execute(
            'select * from wallet where email = ?', [encodeEmail]
        );
        let data = {};
        if(results.length > 0){
            const time1 = moment.tz(results[0].time, "Asia/Kuala_Lumpur");

            let show_form = false;
            if(results[0].phone === null || results[0].name === null || results[0].ic === null){
                show_form = true
            }
            
            data = {
                "id": results[0]?.id,
                "email": results[0]?.email,
                "address": results[0]?.address,
                "phone": results[0]?.ic,
                "name": results[0]?.name,
                "ic": results[0]?.ic,
                "before_devday": time1.isBefore('2024-04-01'),
                "show_form" : show_form,
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

export async function PUT(request) {
    const { id , name , ic , phone } = await request.json();
  
    try {
        if(id && name && ic && phone){
            const conn = await connect();
            const [results, fields] = await conn.execute(
                'UPDATE wallet SET phone = ?, name = ? , ic = ? WHERE id = ? ;',
                [phone , name , ic , id]
            );
          
        }
    
        return NextResponse.json({
            status: "success",
        })
    } catch (error) {
        console.error('An error occurred:', error)
        return NextResponse.json({
            status: "error",
            data: {}
        })
    }
  
  }