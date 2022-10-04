import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0E0B16] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#A238Ca]'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Amit, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a recent Computer Science Graduate from the University of Georgia. I am a lifelong learner who is interested in creating and developing software.
                Over the course of my undergraduate study, I have built various projects that have increased my proficency in many programming languages such as Java and Javascript.
                My recent interests are understanding new and different frameworks in order to create interesting and unique applications.
              </p>
            </div>


        </div>
      </div>

    </div>
  )
}

export default About