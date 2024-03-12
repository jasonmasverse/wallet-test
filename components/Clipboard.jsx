'use client'
import toast, { Toaster } from 'react-hot-toast';

export default async function Clipboard({ email }) {

    const checkWallet = async () => {
        try {
            const response = await fetch(`/api/wallets?email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data);
            if (data.status === 'success') {
                navigator.clipboard.writeText(data.data.address)
                toast.success('Copied', {
                    style: {
                        borderRadius: '20px',
                        background: '#7888a5',
                        color: '#fff',
                        padding: '12px',
                    },
                });
            }
        } catch (error) {
            console.error('An error occurred:', error)
        }
    };

    return (
        <button className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[14px] py-[6px] rounded-[20px] bg-gradient-to-b from-white/50 to-white/50 mt-6 cursor-pointer" onClick={checkWallet}>
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a2 2 0 0 0-1 .3V5c0-1.1.9-2 2-2h7Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M8 7v4H4.2c0-.2.2-.3.3-.4l2.4-2.9A2 2 0 0 1 8 7.1Zm2 0v4a2 2 0 0 1-2 2H4v6c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-[12px] justify-left text-white font-semibold">
                Copy Address
            </p>
            <Toaster containerStyle={{
                top: 660,
                left: 20,
                bottom: 20,
                right: 20,
            }}></Toaster>
        </button>
    )
}

