import { auth, currentUser, UserButton } from '@clerk/nextjs';
import CreateWalletButton from '@/components/CreateWalletButton';
import { connect } from "@/db";
import Registration from '../registration/page';

export default async function CreateWallet() {

  const { userId } = auth();
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress

  let show_form = true;
  let id = null;

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  const checkDetails = async () => {
    try {
      const conn = await connect();
      const [results, fields] = await conn.execute(
        'select * from wallet where email = ?', [email]
      );

      if (results.length > 0) {

        if (results[0].phone === null || results[0].name === null || results[0].ic === null) {
          show_form = true
        } else {
          show_form = false
        }
        id = results[0].id
      }

    } catch (error) {
      console.error('An error occurred:', error)
    }
  };

  await checkDetails();

  return (
    <>
      <main className='flex flex-col w-full h-[100vh] items-center py-10'>
        <div className='flex justify-start w-[19rem]'>
          <UserButton afterSignOutUrl="/" />
          <p className='flex items-center font-semibold text-white pl-3'>Hi {user.firstName} {user.lastName}</p>
        </div>

        {show_form ? (
          <Registration id = {id} email={email}/>
        ) : (
          <>
            <div className='flex flex-col items-center pt-8 pb-8 text-white'>
              <p className='text-xl font-semibold'>Wallet Accounts</p>
            </div>
            <CreateWalletButton email={user.emailAddresses[0].emailAddress} />
          </>
        )}
      </main>
    </>
  )
}
