import Selection from '@/components/Selection';
import { auth, currentUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import CreateWalletButton from '@/components/CreateWalletButton';

export default async function CreateWallet() {

  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <main className='flex flex-col w-screen h-screen items-center py-16'>
        <div className='flex justify-start w-[19rem]'>
          <UserButton afterSignOutUrl="/" />
          <p className='flex items-center font-semibold text-white pl-3'>Hi {user.firstName} {user.lastName}</p>
        </div>
        <div className='flex flex-col items-center pt-8 pb-8 text-white'>
          <p className='text-xl font-semibold'>Wallet Accounts</p>
        </div>

        <CreateWalletButton email={user.emailAddresses[0].emailAddress} />
      </main>
    </>
  )
}
