'use client'
import { useState, useEffect } from "react"
import OwnedNFT from '@/components/OwnedNFT';
import TokenPage from "./TokenPage";

export default function Selection({email}) {

    const [selection, setSelection] = useState('nft')
    const [beforeDevday, setBeforeDevday] = useState(false);

    const checkWallet = async () => {
        try {
            const response = await fetch(`/api/wallets?email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            if (data.status === 'success') {
                setBeforeDevday(data.data.before_devday);
            }

        } catch (error) {
            console.error('An error occurred:', error)
        }
    };

    useEffect(() => {
        checkWallet();
    }, []);

    return (
        <>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[24px] pt-8">
                <div className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[48px] py-[13px] rounded-[20px] cursor-pointer ${selection === 'token' ? 'bg-gradient-to-b from-white/50 to-white/50' : 'border-[1px] border-gray-300'}`} onClick={() => setSelection('token')}>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-white">Token</p>
                </div>
                <div className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[58px] py-[13px] rounded-[20px] cursor-pointer ${selection === 'nft' ? 'bg-gradient-to-b from-white/50 to-white/50' : 'border-[1px] border-gray-300'}`} onClick={() => setSelection('nft')}>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-semibold text-left text-white">NFT</p>
                </div>
            </div>

            {selection === 'token' ? (
                <TokenPage />
            ) : (
                <OwnedNFT checkDevDay={beforeDevday}/>
            )}
        </>
    )
}
