"use client"
import { useEffect, useState } from "react"
import Registration from "@/app/registration/page"
import CreateWalletButton from "./CreateWalletButton"

const CheckName = ({email}) => {

    const [showForm, setShowForm] = useState(true)
    const [id, setid] = useState("")

    const checkDetails = async () => {
        try {
            const response = await fetch(`/api/wallets?email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data.data.name);

            if (Object.keys(data.data).length > 0) {
                if (data.data.phone === null || data.data.name === null || data.data.ic === null) {
                  setShowForm(true)
                } else {
                  setShowForm(false)
                }
                setid(data.data.id)
            }

        } catch (error) {
            console.error('An error occurred:', error)
        }
    }

    useEffect(() => {
        checkDetails();
    }, [email,id])

  return (
    <div>
        {showForm ? (
          <Registration id = {id} email={email} check={setShowForm}/>
        ) : (
          <>
            <div className='flex flex-col items-center pt-8 pb-8 text-white'>
              <p className='text-xl font-semibold'>Wallet Accounts</p>
            </div>
            <CreateWalletButton email={email} />
          </>
        )}
    </div>
  )
}

export default CheckName