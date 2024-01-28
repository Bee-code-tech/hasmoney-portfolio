import React from 'react'
import  Link  from "next/link";
import {Button} from './ui/button'
import {Download,  Send} from 'lucide-react'
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'

import HeroImg from './HeroImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return ( <section>
      <div className="container mx-auto">
        <div className="">
            {/* Text  */}
            <div className="">Test</div>
            {/* Image  */}
            <div className="">Image</div>
        </div>
        {/* Icon  */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce '> 
        <RiArrowDownSLine className='text-4xl text-primary ' />

         </div>
      </div>
    </section>
  )
}

export default Hero
