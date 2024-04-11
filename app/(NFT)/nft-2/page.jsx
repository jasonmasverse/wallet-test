'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NftPage() {

  const [Tap, setTap] = useState(false);

  const nftPreview = () => {
    return (
      <>
        <div className='flex flex-col items-center pt-6 pb-8 text-white'>
          <p className={`${Tap ? 'hidden ' : ''}text-xl font-semibold`}>NFT Preview</p>
          <Image src='/devday.webp' width={100} height={100} alt='nft image' className={`${Tap ? 'mt-8 flex-grow-0 flex-shrink-0 w-[350px] h-[350px] rounded-[18px] ' : 'mt-8 flex-grow-0 flex-shrink-0 w-[250px] h-[250px] rounded-[18px]'} ease-in-out transition-all duration-500`} onClick={() => setTap(!Tap)}></Image>
          <p className={`${Tap ? 'hidden ' : ''} mt-8 text-lg font-bold`}>MasChain DevDay II</p>
          <p className={`mt-8 text-sm max-w-[260px] text-center ${Tap ? 'hidden ' : ''}`}>
            Thank you very much for joining our event. As a token of appreciation we would like to give you a special NFT just for you.</p>
        </div>

        <Link href='/wallet' className={`${Tap ? 'hidden ' : ''} flex justify-center items-center w-[200px] h-[50px] border-[1px] border-gray-200 rounded-[10px] text-white font-semibold text-sm mt-8 hover:bg-white/50`}>Back to Wallet</Link>
      </>
    )
  }

  return (
    <main className='flex flex-col w-full h-screen items-center py-8'>
      {nftPreview()}
    </main>
  )
}
