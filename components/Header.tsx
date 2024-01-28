'use client'
import { useState, useEffect } from "react";
import  Logo  from "./Logo";
import  Nav  from "./Nav";
import  MobileNav  from "./MobileNav";

import ThemeToggler from './ThemeToggler'
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState<Boolean>(false)
  const pathname = usePathname()
  useEffect(() => {
   const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it immediately to set the initial state based on the current scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [])
  
  return (
    <header className={` ${header ? 'py-4 bg-white shadow-lg dark:bg-accent ' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6 ">
          <Nav containerStyles="hidden xl:flex gap-x-8 items-center" linkStyle="relative hover:text-primary transition-all" underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full" />
        <ThemeToggler />
        {/* Mobile nav  */}
        <div className=" xl: hidden">
          <MobileNav />
        </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header