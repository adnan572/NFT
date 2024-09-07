import { wallet } from "../assets"
const Wallet = () => {
  return (
    <section className="flex justify-center items-center max-md:w-full  py-4  ">
        <div className="  bg-red-400/20 px-6 py-4 rounded-md  bg-black/5 backdrop-blur-sm max-sm:w-full max-md:px-1 w-full transition-all duration-200 hover:bg-red-500 active:bg-red-500">
                 <div className="mb-3 px-3">
                    <img src={wallet} className="w-[50px] h-[50px] rounded-full bg-" alt="" />
                 </div>
                 <div className="px-4 py-2">
                    <h1 className="text-xl text-slate-100 font-palanquin max-w-lg mb-4">
                   Set up your wallet
                    </h1>
                    <p className="text-lg text-slate-100 font-montserrat max-w-lg leading-7">
                    Use Trust Wallet, Metamask or any wallet to connect to the app.
                    You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.
                    </p>
                 </div>
            </div>
    </section>
  )
}

export default Wallet