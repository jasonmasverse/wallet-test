import CopyClipboard from '@/components/Clipboard';
import ProfileButton from '@/components/ProfileButton';
import Selection from '@/components/Selection';
import Link from 'next/link';
import { auth, currentUser } from '@clerk/nextjs';

export default async function Wallet() {

  const { userId } = auth();
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress

if (!userId || !user) {
  return <div>You are not logged in</div>;
}

  return (
    <>
      <main className='flex flex-col w-full h-screen items-center my-10'>
        <ProfileButton />
        <div className='flex flex-col items-center pt-8 text-white'>
          <p className='text-md'>Current Wallet Balance</p>
          <p className='text-6xl font-semibold pt-8'>$ 00.00</p>
          <div className='flex w-full justify-center gap-6'>
            <Link href={'/create-wallet'}>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[14px] py-[6px] rounded-[20px] bg-gradient-to-b from-white/50 to-white/50 mt-6">
                <svg
                  width={15}
                  height={16}
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="7.5" cy={8} r="7.5" fill="#87D3F8" />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-[12px] justify-left text-white font-semibold">
                  Account 1
                </p>
              </div>
            </Link>
            <CopyClipboard email={email}/>
          </div>
        </div>
        <Selection email ={email}/>
      </main>
    </>
  )
}
