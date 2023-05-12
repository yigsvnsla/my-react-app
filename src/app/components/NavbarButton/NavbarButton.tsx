import './NavbarButton.css'

type NavbarButtonProps =  Partial<{
  title:string,
  url:string
  linkActive:boolean
}>

function NavbarButton({title}:NavbarButtonProps) {
  return (<a className='navbar-button p-2  md:p-0' href="#">{title}</a>)
}

export default NavbarButton