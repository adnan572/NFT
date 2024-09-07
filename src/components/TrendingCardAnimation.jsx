import { useState,useEffect,useRef } from "react"
const TrendingCardAnimation = ({children}) => {
    const [isVisible,setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    useEffect(()=>{
        const section = sectionRef.current
        const observer = new IntersectionObserver(
            ([entry])=> {
                if(entry.isIntersecting) {
                    setIsVisible(true)
                }else{
                    setIsVisible(false)
                }
            },{
                threshold: 0.1
            }
        )
        if(section) {
            observer.observe(section)
        }
        return()=> {
            if(section) {
                observer.unobserve(section)
            }
        }
    },[])
  return (
    <div ref={sectionRef} className={`transform transition-all duration-1000 max-sm:w-full ${isVisible? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}> 
        {children}
    </div>
  )
}

export default TrendingCardAnimation