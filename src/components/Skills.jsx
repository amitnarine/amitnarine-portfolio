import React from 'react'
import HTML from '../assets/html.png';
import JAVA from '../assets/javanob.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Android from '../assets/android.png';
import Github from '../assets/github.png';
import SQL from '../assets/SQL.png';


export const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0E0B16] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#A238Ca]'>Skills</p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-4'>
                <div className='border-4  border-[#A238Ca]/50 hover:scale-110 duration-500 pt-4'>
                    <img className='w-20 mx-auto' src={JAVA} alt="Java icon" />
                    <p className='my-4'>JAVA</p>
                </div>
                <div className=' border-4 border-[#A238Ca]/50 hover:scale-110 duration-500 pt-4'>
                    <img className='w-20 mx-auto' src={HTML} alt="CSS icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className=' border-4 border-[#A238Ca]/50 hover:scale-110 duration-500 pt-4'>
                    <img className='w-20 mx-auto' src={CSS} alt="Javascript icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='border-4 border-[#A238Ca]/50 hover:scale-110 duration-500 pt-4'>
                    <img className='w-20 mx-auto' src={Javascript} alt="React icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='border-4 border-[#A238Ca]/50 hover:scale-110 duration-500 pt-6'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="Github icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='border-4 border-[#A238Ca]/50 hover:scale-110 duration-500 pt-6'>
                    <img className='w-20 mx-auto' src={Github} alt="Node JS icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='border-4 border-[#A238Ca]/50 hover:scale-110 duration-500 pt-4'>
                    <img className='w-20 mx-auto' src={Android} alt="Mongo icon" />
                    <p className='my-4'>ANDROID STUDIO</p>
                </div>
                <div className='border-4 border-[#A238Ca]/50 hover:scale-110 duration-500 pt-6'>
                    <img className='w-20 mx-auto' src={SQL} alt="AWS icon" />
                    <p className='my-4'>SQL</p>
                </div>
            </div>

        </div>


    </div>
  )
}
export default Skills














