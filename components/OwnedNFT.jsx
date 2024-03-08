import Image from "next/image"

export default function OwnedNFT() {
  return (
    <div className='flex flex-col items-center pt-8'>
          <div className='flex flex-col items-start'>
            <p className='flex w-full text-start text-white font-bold pb-3'>Owned NFT</p>
            <div className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[330px] h-fit'>
              <div className='flex w-full mx-8 my-4'>
                <Image src='/nft.jpeg' width={80} height={90} className='flex-grow-0 flex-shrink-0 w-[60px] h-[60px] rounded-[18px]'></Image>
                <span className='flex flex-col pl-7 text-sm justify-center font-semibold text-white gap-2'>
                  <p>NFT Name</p>
                  <p>NFT ID</p>
                </span>
              </div>
            </div>
            <div className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-[1.5rem] w-[330px] h-fit mt-6'>
              <div className='flex w-full mx-8 my-4'>
                <Image src='/nft.jpeg' width={80} height={90} className='flex-grow-0 flex-shrink-0 w-[60px] h-[60px] rounded-[18px]'></Image>
                <span className='flex flex-col pl-7 text-sm justify-center font-semibold text-white gap-2'>
                  <p>NFT Name</p>
                  <p>NFT ID</p>
                </span>
              </div>
            </div>

            <div className='flex flex-col bg-white/50 backdrop-blur-md shadow-xl rounded-3xl w-[330px] h-[300px] mt-8 p-5'>
              <Image src='/event.jpg' width={300} height={300} className='rounded-3xl'></Image>
              <p className='pt-2 pl-2 font-bold'>Songkran</p>
              <p className='text-sm pl-2'>Lorem Ipseum welcome to masverse devday hope you all have a very good day</p>
            </div>
          </div>

        </div>
  )
}
