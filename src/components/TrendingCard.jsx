import { image1,image2,image3,image4,image5,IMAGE1,IMAGE2,IMAGE3,profile2,profile3,profile4,icon } from "../assets"
import { card } from "../constants"
import TrendingCardAnimation from "./TrendingCardAnimation"
const TrendingCard = () => {
  return (
    
<div className="flex gap-6 justify-center items-center max-sm:flex-col max-md:w-full flex-wrap">
      {card.map((items)=> (
        <TrendingCardAnimation>
          <div className="w-[260px]  bg-red-400/20 px-3 py-3 rounded-md  bg-black/5 backdrop-blur-sm max-sm:w-full">
          <div className="flex-1"><img src={items.imgURL} alt="image1"  className=" w-full h-[230px] object-cover object-center rounded-lg max-md:h-auto max-md:max-h-[400px]"/></div>
          <div className="flex items-center py-3">
            <div><img src={items.profile} className="w-[40px] h-[40px] mt-4 rounded-full" alt="" /></div>
                 <div className="mt-3 ml-4 text-slate-200 font-palanquin text-sm font-bold">
          <p>{items.name}</p>
          <p>{items.title}</p>
                 </div>
                 </div>
                 <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div className="font-palanquin text-xl font-bold text-slate-100">
                <p>Current Bid</p>
              </div>
              <div className="flex items-center mt-3">
                <img src={icon} className="w-[20px] h-[20px]" alt="" />
                <span className="ml-2  text-[#ff5b5b] font-montserrat font-semibold">{items.currentBid} Eth</span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="font-palanquin text-xl font-bold text-slate-100">
                <span>Last Bid</span>
              </div>
              <div className="flex items-center mt-3">
                <img src={icon} className="w-[20px] h-[20px]" alt="" />
                <p className="inline ml-2 text-[#ff5b5b] font-montserrat font-semibold">{items.lastBid} Eth</p>
              </div>
            </div>
            </div>
            </div>
        </TrendingCardAnimation>
      ))}
</div>

   
  )
}

export default TrendingCard