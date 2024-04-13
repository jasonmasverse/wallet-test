'use client'
import toast, { Toaster } from 'react-hot-toast';

export default function Registration({id, email}) {

    const register = async (e) => {
        // e.preventDefault()
        const formData = new FormData(e.target);
        const rawFormData = {
            name: formData.get('name'),
            ic_num: formData.get('ic_number'),
            phone_num: formData.get('phone_number'),
        }
        console.log(rawFormData)

        try {
            if(id === null) {
            const response = await fetch(`/api/wallets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: rawFormData.name,
                    ic: rawFormData.ic_num,
                    phone: rawFormData.phone_num,
                    email : email,
                 })
            });
            const data = await response.json();
            // console.log(data);
            if (data.status === 'success') {
                toast.success('Wallet Created !', {style: {
                    borderRadius: '20px',
                    background: '#7888a5',
                    color: '#fff',
                    padding: '12px',
                  },
                });
            }
        } else {
            const response = await fetch(`/api/wallets`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id: id,
                    name: rawFormData.name,
                    ic: rawFormData.ic_num,
                    phone: rawFormData.phone_num,
                 })
            });
            const data = await response.json();
            // console.log(data);
            if (data.status === 'success') {
                toast.success('Wallet Updated !', {style: {
                    borderRadius: '20px',
                    background: '#7888a5',
                    color: '#fff',
                    padding: '12px',
                  },
                });
            }
        }
        } catch (error) {
            // setDisable(false);
            toast.error('Error', {style: {
                borderRadius: '20px',
                background: '#7888a5',
                color: '#fff',
                padding: '12px',
              },
            });
            console.error('An error occurred:', error)
        }

    }

    return (
        <>
        <div className="w-full h-full flex flex-col justify-center items-center -mt-8">
            <div className="bg-white/60 backdrop-blur-lg py-8 px-11 rounded-3xl m-20 flex flex-col items-center relative">
            <div className='text-center w-full text-[16px] lg:text-[26px] font-bold text-gray-700 drop-shadow-lg mt-2'>User Details</div>

        <Toaster containerStyle={{
                top: 500,
                left: 20,
                bottom: 20,
                right: 20,
            }}></Toaster>

            <form onSubmit={(e) => register(e)} className="mt-4">
                <div className="flex flex-col items-center justify-center gap-5">
                <label htmlFor="name" className="font-bold text-slate-800 flex flex-col">&ensp;Full name as per IC
                    <input type="text" name="name" className="bg-slate-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                </label>
                <label htmlFor="number" className="font-bold text-slate-800 flex flex-col">&ensp;IC number
                    <input type="number" name="ic_number" placeholder="" className="bg-slate-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                </label>
                <label htmlFor="number" className="font-bold text-slate-800 flex flex-col">&ensp;Phone number
                    <input type="number" name="phone_number" placeholder="" className="bg-slate-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                </label>
                    <button type="submit" className="mt-4 bg-blue-700 text-white font-bold py-3 px-6 rounded-full drop-shadow-2xl shadow-lg">Submit</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}
