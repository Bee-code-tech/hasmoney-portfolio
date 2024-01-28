import React from 'react'
import  Link  from "next/link";
import  Image  from "next/image";

const Logo = () => {
  return <Link href='/'>
  <Image src='/logo.png' width={30} height={30} priority alt='user logo'/>
  </Link>
}

export default Logo