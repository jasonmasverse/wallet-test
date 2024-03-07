import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (<>
  <main className='flex flex-col items-center'>

  {/* <div className='text-white font-bold text-lg'>Welcome! Sign in to continue</div> */}
    <SignIn appearance={{ variables: { colorPrimary: '#7C3AED' } }} afterSignInUrl='/create-wallet'/>
  </main>
  </>
  )
}

export default SignInPage