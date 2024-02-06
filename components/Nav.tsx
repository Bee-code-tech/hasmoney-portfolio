import Link from 'next/link'
import React, {FC} from 'react'
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";


interface NavProps {
    containerStyles : string,
    linkStyle: string,
    underLineStyles : string
}


// interface for NavLink component 
interface NavLink {
  path: string;
  name: string;
}

const links: NavLink[] = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'My projects' },
  { path: '/contact', name: 'Contact Me' },
];

// main component for the nav 
const Nav : FC<NavProps> = ({containerStyles, linkStyle, underLineStyles}) => {
    const paths = usePathname()
  return (
    <nav className={`${containerStyles}`}>
      {
        links.map(({path, name  }, index) => {
            return <Link key={index} href={path} className={`${linkStyle}`} >
                {path === paths && (
                    <motion.span initial={{y: '-100px'}} animate ={{y: 0}} transition={{type: 'tween'}} layoutId='underline' className={`${underLineStyles}`} />
                )}
                {name}
                </Link>
        })
      }
    </nav>
  )
}

export default Nav