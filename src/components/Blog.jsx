import { car,sky,arrow} from "../assets"
import HeroAnimation from "./HeroAnimation"
import HeroAnimation2 from "./HeroAnimation2"
import BlogAnimation from "./BlogAnimation"
import BlogAnimation2 from "./BlogAnimation2"
const Blog = () => {
  return (
    <div>
        <div className="mb-5">
            <h1 className="text-4xl text-slate-100 font-palanquin font-semibold max-md:text-3xl">
            Resources Blog & news
            </h1>
        </div>
        <div className="flex justify-center items-center gap-5 max-md:flex-col">
            <BlogAnimation>
                <div className="  rounded-md   bg-black/5 backdrop-blur-sm max-sm:w-full max-md:px-1">
                    <img src={sky} className="w-[520px] h-[350px] brightness-50 object-cover" alt="" />
                    <div class="absolute inset-0 flex items-center justify-center px-5">
                         <div class="text-slate-300 text-4xl font-bold p-4 rounded">
                <h1 className="text-sm text-slate-300 ">
                31 Jan 2022
                </h1>
                <p className="text-3xl text-slate-300 font-palanquin mt-1 max-md:max-w-md max-w-lg max-lg:text-2xl max-md:mb-3">
                7 Reasons to sell your NFTs on BardAi
                </p>
                <p className="text-2xl text-slate-300 font-palanquin max-md:max-w-sm max-lg:text-xl">
                Maximize Exposure and Unlock Profit Potential from the world's largest NFT's marketplace
                </p>
                <div className="flex items-center space-x-2">
                  
                        <a href="/" className="text-white font-montserrat text-[12px]">Read more</a>
                  <img className="w-7 h-7" src={arrow} alt="Arrow" />
                           </div>
                         </div>
                  </div>
                </div>
            </BlogAnimation>
            <BlogAnimation2>
                <div className=" px-0 py-0  rounded-md  bg-black/5 backdrop-blur-sm max-sm:w-full max-md:px-1 relative">
                    <img src={car} className="w-[520px] h-[350px] brightness-50 object-cover" alt="" />
                    <div class="absolute inset-0 flex items-center justify-center px-5">
                         <div class="text-slate-300 text-3xl font-bold p-4 rounded">
                <h1 className="text-sm text-slate-300 ">
                27 Aug 2021
                </h1>
                <p className="text-3xl text-slate-300 font-palanquin mt-1 max-md:max-w-lg max-lg:text-2xl max-md:mb-4">
                The Beginner's to creating & selling digital NFTs
                </p>
                <p className="text-2xl text-slate-300 font-palanquin max-md:max-w-md max-lg:text-xl">
                Unlock Your Creative Potential and Start Earning Today!"
                </p>
                <div className="flex items-center space-x-2">
                  
                        <a href="/" className="text-white font-montserrat text-[12px]">Read more</a>
                  <img className="w-7 h-7" src={arrow} alt="Arrow" />
                           </div>
                
                
                         </div>
                         
                  </div>
                </div>
            </BlogAnimation2>
            
        </div>

    </div>
  )
}

export default Blog