'use client'
import Image from "next/image";

export default function Registration() {

    const register = async (e) => {
        // e.preventDefault()
        const formData = new FormData(e.target);
        const rawFormData = {
            name: formData.get('name'),
            email: formData.get('email'),
        }

        const response = await fetch('/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rawFormData),
        });
    }

    return (
        <>
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[url('https://wallpaperswide.com/download/purple_abstract_design-wallpaper-1440x900.jpg')] bg-no-repeat bg-cover bg-center backdrop-blur-md">
            <div className="bg-gray-200/80 backdrop-blur-sm py-10 px-10 rounded-3xl m-20 flex flex-col items-center">
                <Image src={'/maschain.png'} width={300} height={300} alt="maslogo" className=""></Image>
            <div className='text-center w-full text-[50px] font-bold text-indigo-600 drop-shadow-lg'>Get Your Free NFT!</div>
            <form onSubmit={(e) => register(e)} className="mt-4">
                <div className="flex flex-col items-center justify-center gap-3">
                    <input type="text" name="name" placeholder="Your Name" className="bg-white/80 backdrop-blur-md mt-4 p-2 rounded-xl drop-shadow-xl shadow-[0px_2px_30px_1px_rgba(0,0,0,0.3)]" required />
                    <input type="email" name="email" placeholder="Your Email" className="bg-white/80 backdrop-blur-md mt-4 p-2 rounded-xl drop-shadow-xl shadow-[0px_2px_30px_1px_rgba(0,0,0,0.3)]" required />
                    <button type="submit" className="mt-4 bg-[#7C3AED] text-white font-bold py-2 px-6 rounded-full drop-shadow-2xl shadow-lg">Send</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}
