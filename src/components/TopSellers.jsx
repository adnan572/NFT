import { image1,image2,image3,image4,image5,IMAGE1,IMAGE2,IMAGE3,profile2,profile3,profile4,icon } from "../assets"
import { card } from "../constants"
import { seller } from "../constants"
import TrendingCardAnimation from "./TrendingCardAnimation"
const TopSellers = () => {
  return (

<div className="flex gap-6 justify-center items-center max-sm:flex-col max-md:w-full flex-wrap">

   
  
  {seller.map((item)=> (
    <TrendingCardAnimation>
        <div className="  bg-red-400/20 px-3 py-3 rounded-md  bg-black/5 backdrop-blur-sm max-sm:w-full max-md:px-1">
             <div className=" w-full items-center flex flex-1 gap-3 overflow-hidden">
                {item.imgURL.map((pics)=> (
                        <img src={pics} alt="" className="w-1/3 h-[100px] object-contain object-center rounded-lg max-md:h-auto max-md:max-h-[400px]  " />
                    ))}
             </div>
             <div className="my-8 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded"></div>
             <div className="flex justify-between mb-1">
                    <img src={item.profile} className = 'w-[55px] h-[55px] rounded-full mb-6' alt="" />
                    <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-4xl ">{item.number}</h1>
             </div>
             <div className="flex justify-between max-sm:flex-col">
                <p className="text-lg font-montserrat text-slate-100 max-sm:text-sm">{item.name}</p>
                <p className="text-slate-300 font-semibold max-sm:text-sm">Total earnings: <span className="text-slate-100 max-sm:text-sm">{item.total}</span></p>
             </div>
        </div>
    </TrendingCardAnimation>
  ))}
    
</div>
)
}

export default TopSellers