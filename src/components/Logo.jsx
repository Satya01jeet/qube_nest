import logo from '../assets/logo.png'
const Logo = () => {
  return (
    <div className="logo cursor-pointer">
        <img src={logo} alt="logo" className='h-16' />
    </div>
  )
}

export default Logo