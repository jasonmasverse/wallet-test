import Image from "next/image"
import Link from "next/link"

export default function OwnedNFT() {
  return (
    <div className='flex flex-col items-center pt-8'>
      <div className='flex flex-col items-start'>
        <Link href='/nft-2' className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[320px] h-fit'>
          <div className='flex w-full mx-10 my-4'>
            <Image src='/nft2.png' width={80} height={90} alt="nft" className='flex-grow-0 flex-shrink-0 w-[60px] h-[60px] rounded-[13px]'></Image>
            <span className='flex flex-col pl-7 text-sm justify-center text-white gap-2 max-w-[160px] text-center'>
              <p className="text-[16px] font-bold">MasChain DevDay II</p>
            </span>
          </div>
        </Link>

        <Link href='/nft-1' className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[320px] h-fit mt-6'>
          <div className='flex w-full mx-10 my-4'>
            <Image src='/nft1.png' width={80} height={90} alt="nft" className='flex-grow-0 flex-shrink-0 w-[60px] h-[60px] rounded-[13px]'></Image>
            <span className='flex flex-col pl-7 text-sm justify-center text-white gap-2 max-w-[160px] text-center'>
              <p className="text-[16px] font-bold">MasChain National Launch</p>
            </span>
          </div>
        </Link>
      </div>

    </div>
  )
}
