import { auth, currentUser, UserButton } from '@clerk/nextjs';

export default async function ProfileButton() {

    const { userId } = auth();
    const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className='flex justify-start w-[19rem]'>
          <UserButton afterSignOutUrl="/" />
          <p className='flex items-center font-semibold text-white pl-3'>Hi {user.firstName} {user.lastName}</p>
    </div>
  )
}
