'use client'

export default function CreateWalletButton({email}) {

    const createWallet = async () => {
        console.log(email);
        const response = await fetch(`/api/wallet?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ email }),
        });
        const data = await response.json();
    };
    return (
        <div>
            <button className="bg-white/45 backdrop-blur shadow-2xl drop-shadow-xl font-bold text-white rounded-full py-3 px-6" onClick={createWallet}>Create Wallet</button>
        </div>
    )
}
