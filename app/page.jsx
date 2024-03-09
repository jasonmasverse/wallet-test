import Link from "next/link";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { auth, currentUser } from '@clerk/nextjs';

export default async function Home() {

  const { userId } = auth();
  const user = await currentUser();

  if (userId || user) {
    redirect('/create-wallet')
  }

  return (
    <main className="flex flex-col items-center h-screen justify-center p-8">
      <div className="flex flex-col text-white w-full justify-center items-center">
        <Image alt="image" src="/Mas.svg" width={230} height={200}></Image>
        <p className="text-center text-md font-bold">An Early Access To Our Wallet </p>
        <br />
        <p className="text-center max-w-[540px]">Dive into a vast network of blockchain ecosystem partners, ranging from financial services and decentralized applications (DApps) to educational platforms and sustainability projects.</p>
      </div>

      <div className="pt-8 flex flex-col gap-4">
        {/* <button className="bg-blue-500 rounded-full py-2 px-8 font-bold">Sign In</button> */}
        <Link href="/sign-in">
          <button className="bg-white/45 backdrop-blur shadow-2xl drop-shadow-xl font-bold text-white rounded-full py-3 px-6">Sign In</button>
        </Link>
      </div>
    </main>
  );
}
