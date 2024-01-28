import React, {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState<number>(0);

    useEffect(() => {
      const updateScrollCompletion = () => {
        const currentProgress : number  = window.scrollY || 0
        const scrollHeight : number  = document.body.scrollHeight - window.innerHeight || 1

          if (!isNaN(currentProgress) && !isNaN(scrollHeight) && scrollHeight !== 0) {
        setCompletion((currentProgress / scrollHeight) * 100);
      }
      }
      window.addEventListener('scroll', updateScrollCompletion)

      return () => window.removeEventListener('scroll', updateScrollCompletion)
    
     
    }, [])
    
  return completion
}

export default useScrollProgress