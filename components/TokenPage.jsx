import Image from "next/image"

export default function TokenPage() {
  return (
    <div className='flex flex-col items-center pt-8'>
          <div className='flex flex-col items-start'>
            <p className='flex w-full text-start text-white font-bold pb-3'>Tokens</p>
            <div className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[330px] h-fit'>
              <div className='flex w-full my-4 justify-center text-white font-semibold'>
               None
              </div>
            </div>

            {/* <div className='flex flex-col border-2 border-gray-300 bg-white/50 backdrop-blur-md shadow-xl rounded-3xl w-[330px] h-[300px] mt-8 p-5'>
              <Image src='/event.jpg' width={300} height={300} className='rounded-3xl'></Image>
              <p className='pt-2 pl-2 font-bold'>Songkran</p>
              <p className='text-sm pl-2'>Lorem Ipseum welcome to masverse devday hope you all have a very good day</p>
            </div> */}
          </div>

        </div>
  )
}
