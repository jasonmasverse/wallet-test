'use client'
import { useState } from "react"
import OwnedNFT from '@/components/OwnedNFT';
import TokenPage from "./TokenPage";

export default function Selection() {

    const [selection, setSelection] = useState('token')

    return (
        <>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[26px] pt-8">
                <div className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[53px] py-[13px] rounded-[20px] cursor-pointer ${selection === 'token' ? 'bg-gradient-to-b from-white/50 to-white/50' : 'border-[1px] border-gray-300'}`} onClick={() => setSelection('token')}>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-white">Token</p>
                </div>
                <div className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[60px] py-[13px] rounded-[20px] cursor-pointer ${selection === 'nft' ? 'bg-gradient-to-b from-white/50 to-white/50' : 'border-[1px] border-gray-300'}`} onClick={() => setSelection('nft')}>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-semibold text-left text-white">NFT</p>
                </div>
            </div>

            {selection === 'token' ? (
                <TokenPage />
            ) : (
                <OwnedNFT />
            )}
        </>
    )
}
