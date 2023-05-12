
import { ElementRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavbarButton from '../../components/NavbarButton/NavbarButton'
import './Navbar.css'



function Navbar() {


  // const navbarButtonsRef = useRef<HTMLDivElement>(null)
  // const [openNavbar, setOpenNavbar] = useState(false)
  // useEffect(() => {
  //   navbarButtonsRef.current?.classList.toggle('!h-auto', openNavbar)
  // },[openNavbar]);

  return (
    <div className='w-full bg-white shadow-2xl '>
      <nav
        className='
        
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
        <div className='w-full flex flex-col justify-center'>
          <ul
            className="
              flex
              flex-row
              justify-around
              items-center
              space-x-3
              md:text-xl
              md:space-x-8 
              sm:justify-end
              ">
            <li className='relative'>
              <NavbarButton title='Home' />
            </li>
            <li className='relative'>
              <NavbarButton title='Services' />
            </li>
            <li className='relative'>
              <NavbarButton title='Pricing' />
            </li>
            <li className='relative'>
              <NavbarButton title='Contact' />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
