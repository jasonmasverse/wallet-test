import { auth, currentUser, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default async function NftPage() {

  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <main className='flex flex-col w-full h-[120vh] items-center py-10'>
        <div className='flex justify-start w-[19rem]'>
          <UserButton afterSignOutUrl="/" />
          <p className='flex items-center font-semibold text-white pl-3'>Hi {user.firstName} {user.lastName}</p>
        </div>

        <div className='flex flex-col items-center pt-8 pb-8 text-white'>
          <p className='text-xl font-semibold'>NFT Name</p>
          <Image src='/nft.jpeg' width={100} height={100} alt='nft image' className=' mt-8 flex-grow-0 flex-shrink-0 w-[250px] h-[250px] rounded-[18px]'></Image>
          <p className='mt-8 text-xs'>Token ID: 123456789</p>
          <p className='mt-8 text-sm max-w-[260px] text-center'>An appreciation gift upon attending our dev day.
Thank you very much for joining our event and support us along the way. As a token of appreciation we would like to give you a special NFT just for you. Enjoy your Gift !</p>
        </div>

        <Link href='/wallet' className='flex justify-center items-center w-[200px] h-[50px] bg-white/50 rounded-[10px] text-white font-semibold text-sm mt-8'>Back to Wallet</Link>

      </main>
    </>
  )
}
