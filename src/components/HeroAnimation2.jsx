import { useState,useEffect,useRef } from "react"
const HeroAnimation2 = ({children}) => {
    const [isVisible,setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    useEffect(()=>{
        const section = sectionRef.current
        const observer = new IntersectionObserver(
            ([entry])=> {
                if(entry.isIntersecting) {
                    setIsVisible(true)
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
    <div ref={sectionRef} className={`transform transition-all duration-500 ${isVisible? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1/2'}`}> 
        {children}
    </div>
  )
}

export default HeroAnimation2