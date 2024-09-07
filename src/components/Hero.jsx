import { handDrawnApe1,handDrawnApe2,handDrawnApe3,handDrawnApe4 } from "../assets"
import HeroAnimation from "./HeroAnimation"
import HeroAnimation2 from "./HeroAnimation2"
const Hero = () => {
  return (
    <section className="flex justify-center items-center  bg-black/5 backdrop-blur-sm px-8 py-6 border border-black/50 rounded-md max-md:flex-col max-md:w-full mx-auto max-md:px-4 max-md:py-3 w-[90%]">
      <HeroAnimation>
        <div className="mt-[60px] mr-8">
          <span className="text-[#a774b9] text-4xl font-montserrat font-semibold  max-md:leading-4 max-md:text-left">Discover </span> <span className="text-4xl text-[#954781] font-montserrat font-semibold  max-md:text-left"> & </span> <span className="text-4xl text-[#af2965] font-montserrat font-semibold  max-md:text-left"> Collect</span> <p className="text-4xl max-w-lg font-montserrat font-semibold text-slate-300 max-md:text-3xl max-md:text-left">The Best Digital NFTs Art</p>
          <p className="mt-3 max-w-lg font-palanquin text-slate-100 text-lg leading-7 font-semibold max-md:text-left max-md:leading-8">We are a huge marketplace dedicated to connecting great artists of all NFT with their fans and unique token collectors!</p>
          <button className="rounded-md bg-[#a774b9] text-slate-200 px-4 py-2 text-md mt-6"><a href="#trending">Explore Now</a></button>
        </div>
      </HeroAnimation>
      <HeroAnimation2>
        <div className="flex gap-5 mt-3">
        <div>
          <img src={handDrawnApe1} alt="ape1" className="w-[210px] h-[250px] mb-5 mt-9 rounded-lg max-md:w-[170px] max-md:h-[170px]"/>
          <img src={handDrawnApe2} alt="ape2" className="w-[210px] h-[250px]  rounded-lg max-md:w-[170px] max-md:h-[170px]" />
        </div>
        <div>
          <img src={handDrawnApe3} alt="ape3" className="w-[210px] h-[250px] mb-5 mt-3 rounded-lg max-md:w-[170px]  max-md:h-[170px]" />
          <img src={handDrawnApe4} alt="ape4"  className="w-[210px] h-[250px] max-md:w-[170px] max-md:h-[170px] rounded-lg"/>
        </div>
        </div>
      </HeroAnimation2>
    </section>

  )
}

export default Hero