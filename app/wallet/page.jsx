import Selection from '@/components/Selection';
import { auth, currentUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function Wallet() {

  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <main className='flex flex-col w-full items-center py-16'>
        <div className='flex justify-start w-[19rem]'>
          <UserButton afterSignOutUrl="/" />
          <p className='flex items-center font-semibold text-white pl-3'>Hi {user.firstName} {user.lastName}</p>
        </div>
        <div className='flex flex-col items-center pt-8 text-white'>
          <p className='text-md'>Current Wallet Balance</p>
          <p className='text-6xl font-semibold pt-8'>$ 00.00</p>
          <Link href={'/create-wallet'}>

          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[12px] py-[5px] rounded-[20px] bg-gradient-to-r from-[#3a253d]/[0.13] to-[#231f48]/[0.32] mt-6">
            <svg
              width={15}
              height={16}
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
              >
              <circle cx="7.5" cy={8} r="7.5" fill="#F6ABFF" />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-[9px] text-left text-white">
              Account 1
            </p>
          </div>
              </Link>
        </div>
        <Selection />
      </main>
    </>
  )
}
