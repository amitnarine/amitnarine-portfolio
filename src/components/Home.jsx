import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {

  
  return (
    <div name='home' className='w-full h-screen bg-[#0E0B16]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#A238Ca]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Amit Narine</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer,</h2>
            <p className='text-[#8892b0] py-4 max-w[700px]'></p>
            <div>
                <button  onClick={(e) => { e.preventDefault(); window.location.href='/work';}}
                 className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4717f6] hover:border-[#4717f6]'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>



        </div>




    </div>
  )
}

export default Home