import { connect } from "@/db";
import { auth, currentUser, UserButton } from '@clerk/nextjs';

const Backdoor = async () => {

  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  const conn = await connect();
  let data = {};

  const showList = async () => {
    const [results, fields] = await conn.execute(
      'select * from wallet ',
    );
    data = results

  }

  await showList();


  // const list = ({id, address, email, name, phone, ic}) => {
  //   return (
  //     <>
  //       <div className="flex bg-gray-100 mx-6 border-[1px] border-gray-400 text-md gap-4 py-3 justify-evenly" key={id}>
  //         <p className="flex justify-center max-w-[20px] px-6">{id}</p>
  //         <p className="flex justify-center px-6">{address}</p>
  //         <p className="flex justify-center px-6">{email}</p>
  //         <p className="flex justify-center px-6">{name || 'N/A'}</p>
  //         <p className="flex justify-center px-6">{phone || 'N/A'}</p>
  //         <p className="flex justify-center px-6">{ic || 'N/A'}</p>
  //         {/* <p className="flex justify-center w-fit px-6">{data.time}</p> */}

  //       </div>
  //     </>
  //   )
  // }


  return (
    <div className="pb-24">
      <div className='flex flex-col items-center pt-8 pb-5 text-white'>
        <p className='text-xl font-semibold'>Total Accounts</p>
      </div>
      {/* {data2.map((item) => (list(item)))} */}
      <div className="flex bg-gray-200 mx-6 border-[1px] border-gray-400 text-md gap-4 py-3 text-center font-semibold">
        <div className="flex flex-col w-6 px-4">
          <p>ID</p>
        </div>
        <div className="flex flex-col px-4 w-[500px]">
          <p>Address</p>
        </div>
        <div className="flex flex-col items-center px-4 w-[300px]">
          <p>Email</p>
        </div>
        <div className="flex flex-col items-center px-4 w-[400px]">
          <p>Name</p>
        </div>
        <div className="flex flex-col items-center px-4 w-[300px]">
          <p>Phone</p>
        </div>
        <div className="flex flex-col items-center px-4 w-[400px]">
          <p>IC number</p>
        </div>
      </div>

      {data.map((item) => (
        <div className="flex bg-gray-100 mx-6 border-[1px] border-gray-400 text-md gap-4 py-3">
          <div className="flex flex-col w-6 px-4">
            <p>{item.id}</p>
          </div>
          <div className="flex flex-col px-4 w-[480px]">
            <p>{item.address}</p>
          </div>
          <div className="flex flex-col items-center px-4 w-[330px] ">
            <p>{item.email}</p>
          </div>
          <div className="flex flex-col items-center px-4 w-[400px]">
            <p>{item.name || 'N/A'}</p>
          </div>
          <div className="flex flex-col items-center px-4 w-[300px]">
            <p>{item.phone || 'N/A'}</p>
          </div>
          <div className="flex flex-col items-center px-4 w-[400px]">
            <p>{item.ic || 'N/A'}</p>
          </div>
        </div>

      ))}
    </div>
  )
}

export default Backdoor