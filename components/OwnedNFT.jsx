import Image from "next/image"
import Link from "next/link"

export default function OwnedNFT() {
  return (
    <div className='flex flex-col items-center pt-8'>
      <div className='flex flex-col items-start'>
        <p className='flex w-full text-start text-white font-bold pb-3'>Owned NFT</p>
        <Link href='/nft' className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[320px] h-fit'>
          <div className='flex w-full mx-8 my-4'>
            <Image src='/nft.jpeg' width={80} height={90} className='flex-grow-0 flex-shrink-0 w-[60px] h-[60px] rounded-[18px]'></Image>
            <span className='flex flex-col pl-7 text-sm justify-center font-semibold text-white gap-2'>
              <p>NFT Name</p>
              <p>NFT ID</p>
            </span>
          </div>
        </Link>

        <Link href='/nft' className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[320px] h-fit mt-6'>
          <div className='flex w-full mx-8 my-4'>
            <Image src='/nft.jpeg' width={80} height={90} className='flex-grow-0 flex-shrink-0 w-[60px] h-[60px] rounded-[18px]'></Image>
            <span className='flex flex-col pl-7 text-sm justify-center font-semibold text-white gap-2'>
              <p>NFT Name</p>
              <p>NFT ID</p>
            </span>
          </div>
        </Link>

        <div className='flex flex-col w-full items-center mt-6'>
          <p className="text-white mb-4 font-medium">Upcoming Event</p>
          <div className="flex flex-col items-center justify-center bg-[url('/Rectangle.svg')] bg-no-repeat w-[300px] h-[240px] rounded-3xl">

          {/* <Image src='/Rectangle.svg' width={300} height={300} className='rounded-3xl w-full'></Image> */}
          <span className="absolute">
            <p className='font-bold text-white text-[28px]'>DEV DAY III</p>
            <p className='text-sm text-white text-center'>28 March 2024</p>
          </span>
          </div>
        </div>
      </div>

    </div>
  )
}
