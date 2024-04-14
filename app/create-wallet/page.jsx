import { auth, currentUser, UserButton } from '@clerk/nextjs';
import CheckName from '@/components/CheckName';

export default async function CreateWallet() {

  const { userId } = auth();
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }


  return (
    <>
      <main className='flex flex-col w-full h-[100vh] items-center py-10'>
        <div className='flex justify-start w-[19rem]'>
          <UserButton afterSignOutUrl="/" />
          <p className='flex items-center font-semibold text-white pl-3'>Hi {user.firstName} {user.lastName}</p>
        </div>
        <CheckName email={email} />

        {/* {show_form ? (
          <Registration id = {id} email={email} check={checkDetails}/>
        ) : (
          <>
            <div className='flex flex-col items-center pt-8 pb-8 text-white'>
              <p className='text-xl font-semibold'>Wallet Accounts</p>
            </div>
            <CreateWalletButton email={user.emailAddresses[0].emailAddress} />
          </>
        )} */}
      </main>
    </>
  )
}
