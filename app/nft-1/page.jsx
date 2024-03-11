import ProfileButton from '@/components/ProfileButton';
import Image from 'next/image';
import Link from 'next/link';

export default async function NftPage() {

  return (
    <>
      <main className='flex flex-col w-full h-[120vh] items-center py-10'>
        <ProfileButton/>
        <div className='flex flex-col items-center pt-8 pb-8 text-white'>
          <p className='text-xl font-semibold'>Maschain National Launch</p>
          <Image src='/launchnft.webp' width={100} height={100} alt='nft image' className=' mt-8 flex-grow-0 flex-shrink-0 w-[250px] h-[250px] rounded-[18px]'></Image>
          <p className='mt-8 text-lg font-bold'>ENJOY YOUR GIFT!</p>
          <p className='mt-8 text-sm max-w-[260px] text-center'>
Thank you very much for joining our event. As a token of appreciation we would like to give you a special NFT just for you.</p>
        </div>

        <Link href='/wallet' className='flex justify-center items-center w-[200px] h-[50px] bg-white/50 rounded-[10px] text-white font-semibold text-sm mt-8'>Back to Wallet</Link>

      </main>
    </>
  )
}
