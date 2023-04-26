
import { ElementRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavbarButton from '../NavbarButton/NavbarButton'
import './Navbar.css'



function Navbar() {


  // const navbarButtonsRef = useRef<HTMLDivElement>(null)
  // const [openNavbar, setOpenNavbar] = useState(false)
  // useEffect(() => {
  //   navbarButtonsRef.current?.classList.toggle('!h-auto', openNavbar)
  // },[openNavbar]);

  return (

    <nav
      className='
        bg-transparent
        relative
        z-10
        font-Goldman 
        text-black 
        mx-auto
        container
        w-full 
        flex
        justify-between
        overflow-hidden
    '>
      <a 
        href="#"
        className='
          hidden
          sm:flex
          sm:items-center'
      >
        <img 
          src="../../../../nutriaSoft.svg" 
          alt="" 
          className='
            h-16
            object-cover
            

        '/>
        <span
          className='
            font-extrabold 
            text-4xl
            leading-tight
        '>NutriaSoft</span>
      </a>
        <div className='container'>
          <ul 
            className="
              
              flex
              flex-row
              justify-around
              items-center
              sm:text-xl
              sm:space-x-8 
            ">
            <li className='relative'>
              <NavbarButton title='Home'/>
            </li>
            <li className='relative'>
              <NavbarButton title='Services'/>
            </li>
            <li className='relative'>
              <NavbarButton title='Pricing'/>
            </li>
            <li className='relative'>
              <NavbarButton title='Contact'/>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
