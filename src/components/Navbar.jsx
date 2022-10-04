import React, {useState} from 'react'
import Logo from '../assets/logogreen.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'




const Navbar = () => {

  const[nav,setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0E0B16] text-gray-300'>

        <div className='pt-3 pl-5'>
          <img src={Logo} alt= "Temp Logo" style={{width: '80px'}}/> 
        </div>
        {/*Menu*/}
        
                <ul className='hidden md:flex'>
                  <li>
                  <a href='/'>Home</a>
                  </li>
                  <li>
                  <a href='/about'>About</a>
                  </li>
                  <li>
                  <a href='/skills'>Skills</a>
                  </li>
                  <li>
                  <a href='/work'>Work</a>
                  </li>
                  <li>
                  <a href='/contact'>Contact</a>
                  </li>
                </ul>
         {/*Hamburger*/}
         <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
         </div>

        {/*Mobile Menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <a href='/'>Home</a>
            </li>
            <li className='py-6 text-4xl'>
            <a href='/about'>About</a>
            </li>
            <li className='py-6 text-4xl'>
            <a href='/skills'>Skills</a>
            </li>
            <li className='py-6 text-4xl'>
            <a href='/work'>Work</a>
            </li>
            <li className='py-6 text-4xl'>
            <a href='/contact'>Contact</a>
            </li>
        </ul>

         {/*Social Icons*/}
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://www.linkedin.com/in/amitnarine'>
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://github.com/amitnarine'>
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='mailto:amitnarine@yahoo.com'>
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://docs.google.com/document/d/e/2PACX-1vQTKGpfTmTXLGxun-WSpjOVkHSVGsWRIx7Gz4xN_ESa7Az_PKvYTk-mBmf9z8o1D7j50ogsL8Ehjfbn/pub'>
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>


          </ul>


         </div>

    </div>
  )
}

export default Navbar
