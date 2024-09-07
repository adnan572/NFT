import { useRef,useEffect,useState } from "react"

const HeroAnimation = ({children}) => {

const sectionRef = useRef(null)
const [isVisible,setIsVisible] = useState(false)
useEffect(()=>{
const section = sectionRef.current
const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting){
            setIsVisible(true)
        }
    },
    {
        threshold: 0.1
    }

)


if(section){
    observer.observe(section)
}
return ()=> {
    if(section) {
         observer.unobserve(section)
    }
}

},[])
  return (
  
    <div ref={sectionRef} className={`transform transition-all duration-500 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-1/2 opacity-0"
      }`}>
        {children}
    </div>

)
}

export default HeroAnimation