import { useEffect, useRef } from "react"

function RevealOnScreen({children}) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        ref.current.classList.add('visible')
        observer.unobserve(ref.current)
      }
    }, {threshold: 0.2, rootMargin: '0px 0px -50px 0px'} )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect();
  })
  return (
    <div ref={ref} className='reveal'>{children}</div>
  )
}

export default RevealOnScreen