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
        <div className="w-full h-screen flex flex-col justify-center items-center relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://wallpaperswide.com/download/purple_abstract_design-wallpaper-1440x900.jpg')] bg-no-repeat bg-cover bg-center blur-sm mix-blend-luminosity"></div>
            <div className="bg-white/60 backdrop-blur-lg py-10 px-10 rounded-3xl m-20 flex flex-col items-center relative">
                <Image src={'/launchnft.webp'} width={250} height={300} alt="maslogo" className="-mt-2 rounded-3xl"></Image>
            <div className='text-center w-full text-[25px] lg:text-[35px] font-bold text-gray-700 drop-shadow-lg mt-4'>Get Your Free NFT!</div>
            <form onSubmit={(e) => register(e)} className="mt-3">
                <div className="flex flex-col items-center justify-center gap-3">
                <label htmlFor="name" className="font-semibold text-gray-700 flex flex-col">&ensp;Name
                    <input type="text" name="name" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                </label>
                <label htmlFor="email" className="font-semibold text-gray-700 flex flex-col">&ensp;Email
                    <input type="email" name="email" placeholder="" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                </label>
                    <button type="submit" className="mt-4 bg-blue-700 text-white font-bold py-3 px-8 rounded-full drop-shadow-2xl shadow-lg">Claim</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}
