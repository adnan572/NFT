import { burgerMenu } from "../assets"
import { useState,useEffect } from "react"
const Nav = () => {

    
        const [isOpen,setIsOpen] = useState(false)

        const toggleNav = ()=> {
            setIsOpen(!isOpen)
        }
    
    
        const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
          const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
        
  return (

    <section className={`px-8 py-5 w-full max-md:py-2 max-md:bg-[#3b3231] max-md:px-5 sticky top-0 z-50 ${scrolled ? ' bg-[#3b3231]' :  'md:bg-[#3b3231]/50'  } relative `}>
        <div className={`md:flex md:justify-between md:items-center max-w-[1440px] mx-auto`}>
            <div>
                <p className="text-4xl text-white font-mono max-md:text-3xl">Badr
                    <span className="text-coral-red">AI</span>
                </p>
            </div>
                
                    <ul className={`gap-4 md:flex md:items-center z-[1] md:z-auto md:static absolute max-md:bg-[#3b3231] w-full left-0 right-0 md:w-auto max-md:px-5 max-md:py-5 transition-all duration-700 ease-in-out  ${isOpen ? 'max-md:max-h-[500px] max-md:opacity-100' : 'max-md:max-h-0 max-md:opacity-0'}`}>
                    <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300 hover my-6 md:my-0 "><a id="home" href="#myhome" onClick={toggleNav}>Home</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300 my-5 md:my-0"><a id="categories" href="#trending" onClick={toggleNav}>Trending</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300 my-6 md:my-0"><a id="sellers" href="#topsellers" onClick={toggleNav}>Top Sellers</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300 my-6 md:my-0"><a id="showcase" href="#wallet" onClick={toggleNav}>Wallet</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300 my-6 md:my-0"><a id="faq" href="#myblog" onClick={toggleNav}>Blog</a></li>
                        <li className="text-slate-100 font-bold font-sans hover:text-coral-red transition-colors duration-300 my-6 md:my-0"><a id="blog" href="#contactus" onClick={toggleNav}>Contact us</a></li>
                    </ul>
                    
                
                <div className=" max-md:block hidden absolute top-4 right-4" onClick={toggleNav}>
                    <img className="w-[25px] h-[25px] max-md:w-[35px] max-md:h-[35px]" src={burgerMenu} alt="" />
                </div>
        </div>
    </section>
  )
}

export default Nav