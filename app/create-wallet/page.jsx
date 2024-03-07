import Selection from '@/components/Selection';
import { auth, currentUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function CreateWallet() {

  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <main className='flex flex-col w-screen h-screen items-center p-16'>
        <div className='flex justify-start w-[19rem]'>
          <UserButton afterSignOutUrl="/" />
          <p className='flex items-center font-semibold text-white pl-3'>Hi {user.firstName} {user.lastName}</p>
        </div>
        <div className='flex flex-col items-center pt-8 pb-8 text-white'>
          <p className='text-md font-semibold'>Wallet Accounts</p>
        </div>

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
                <p>NFT ID</p>
              </span>
            </div>
          </div>
        </Link>

      </main>
    </>
  )
}
