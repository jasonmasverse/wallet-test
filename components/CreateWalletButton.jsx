'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CreateWalletButton({ email }) {

    const [walletAdd, setwalletAdd] = useState(false)
    const [loading, setLoading] = useState(true)

    const [addr, setaddr] = useState('')

    const truncateAddress = (address) => {
        if (address.length > 10) {
            return `${address.slice(0, 5)}...${address.slice(-5)}`;
        }
        return address;
    };

    const checkWallet = async () => {
        try {
            const response = await fetch(`/api/wallets?email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            // console.log(data);
            if (data.status === 'success') {
                setwalletAdd(true);
                setaddr(truncateAddress(data.data.address))
            }

        } catch (error) {
            console.error('An error occurred:', error)
        }
        setLoading(false)
    };

    const createWallet = async () => {
        try {
            const response = await fetch(`/api/wallets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            });
            const data = await response.json();
            // console.log(data);
            if (data.status === 'success') {
                setwalletAdd(true);
            }

        } catch (error) {
            console.error('An error occurred:', error)
        }
        setLoading(false)

    };

    useEffect(() => {
        checkWallet();
    }, [createWallet]);


    const showButton = () => {
        if(loading) return 
        return walletAdd ? 
            <Link href={'/wallet'}>
                <div className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[330px] h-fit'>
                    <div className='flex w-full mx-8 my-4'>
                        <svg
                            width={55}
                            height={55}
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <circle cx="7.5" cy={8} r="7.5" fill="#F6ABFF" />
                        </svg>
                        <span className='flex flex-col pl-7 text-sm justify-center font-semibold text-white gap-2'>
                            <p>Account 1</p>
                            <p>{addr}</p>
                        </span>
                    </div>
                </div>
            </Link>
                : <button className="bg-white/45 backdrop-blur shadow-2xl drop-shadow-xl font-bold text-white rounded-full py-3 px-6 mt-[10rem]"
                    onClick={createWallet}>Create Wallet</button>

    }


    return (
        <div className="flex flex-col items-center gap-8">
            {showButton()}
        </div>
    )
}
