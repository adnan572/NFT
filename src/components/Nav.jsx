import { burgerMenu } from "../assets"
import { useState } from "react"
const Nav = () => {

    
        const [isOpen,setIsOpen] = useState(false)

        const toggleNav = ()=> {
            setIsOpen(!isOpen)
        }
    
    

    
  return (

    <section className="px-8 py-5 w-full max-md:py-2 max-md:px-5 bg-[#3b3231]/80">
        <div className={`flex justify-between items-center max-w-[1440px] relative mx-auto`}>
            <div>
                <p className="text-4xl text-white font-mono max-md:text-3xl">Badr
                    <span className="text-coral-red">AI</span>
                </p>
                <ul className={`flex flex-col gap-4 ${isOpen ? 'block' : 'hidden' } mt-5 md:hidden px-3 py-4`}>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300 hover"><a id="home" href="/">Home</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300"><a id="categories" href="/">Categories</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300"><a id="sellers" href="/">Sellers</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300"><a id="showcase" href="/">Showcase</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300"><a id="faq" href="/">Faq</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300"><a id="blog" href="/">Blog</a></li>
                    </ul>
            </div>
                <div>
                    <ul className="flex gap-4 max-md:hidden">
                        <li className="text-slate-100 font-semibold font-sans hover:text-coral-red transition-colors duration-300 hover"><a id="home" href="/">Home</a></li>
                        <li className="text-slate-100 font-semibold font-sans hover:text-coral-red transition-colors duration-300"><a id="categories" href="/">Categories</a></li>
                        <li className="text-slate-100 font-semibold font-sans hover:text-coral-red transition-colors duration-300"><a id="sellers" href="/">Sellers</a></li>
                        <li className="text-slate-100 font-semibold font-sans hover:text-coral-red transition-colors duration-300"><a id="showcase" href="/">Showcase</a></li>
                        <li className="text-slate-100 font-semibold font-sans hover:text-coral-red transition-colors duration-300"><a id="faq" href="/">Faq</a></li>
                        <li className="text-slate-100 font-semibold font-sans hover:text-coral-red transition-colors duration-300"><a id="blog" href="/">Blog</a></li>
                    </ul>
                    
                </div>
                <div className=" max-md:block hidden absolute top-4 right-4" onClick={toggleNav}>
                    <img className="w-[25px] h-[25px] max-md:w-[35px] max-md:h-[35px]" src={burgerMenu} alt="" />
                </div>
        </div>
    </section>
  )
}

export default Nav