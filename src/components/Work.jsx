import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import Tweeter from '../assets/tweeter.JPG'
import Weather from '../assets/k.JPG'
import Quiz from '../assets/quiz.JPG'
import Shop from '../assets/shop.JPG'
import Athona from '../assets/athona.JPG'
import Netflix from '../assets/netflix.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0E0B16]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pt-20'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#A238Ca]'>Work</p>
                <p className='py-3'>// Check out some of my recent work</p>
            </div>

            {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
             {/*Grid Item*/}
                <div style={{backgroundImage: `url(${Tweeter})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tweeter - Twitter Clone
                        </span>
                        <div className='pt=8 text-center'>
                            <a href='https://comfy-concha-9b8246.netlify.app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/amitnarine/Tweeter'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                 {/*Grid Item 2*/}
                 <div style={{backgroundImage: `url(${Weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           Weather App
                       </span>
                       <div className='pt=8 text-center'>
                           <a href='https://tubular-jelly-5bdfdd.netlify.app'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                           <a href='https://github.com/amitnarine/Weather-App-React'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                       </div>
                   </div>
               </div>

                 {/*Grid Item 3*/}
                 <div style={{backgroundImage: `url(${Shop})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-1xl font-bold text-white tracking-wider'>
                           Shopping Card Android App
                       </span>
                       <div className='pt=8 text-center'>

                        {/* Comment
                           <a href='/'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                           */}
                           <a href='https://github.com/amitnarine/Shopping_Cart_App'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                       </div>
                   </div>
               </div>


                {/*Grid Item 4*/}
                <div style={{backgroundImage: `url(${Quiz})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover Effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                          Capitol Quiz Android App
                      </span>
                      <div className='pt=8 text-center'>
                        {/* Comment
                          <a href='/'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                          </a>
                        */}
                          <a href='https://github.com/amitnarine/State_Capitol_Quiz_App'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                          </a>
                      </div>
                  </div>
              </div>

                {/*Grid Item 5*/}
                <div style={{backgroundImage: `url(${Athona})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            Mock Course Registration Website
                        </span>
                        <div className='pt=8 text-center'>
                            <a href='https://youtu.be/VigIvlqeqWU'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/amitnarine/Athona'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/*Grid Item 6*/}
                 <div style={{backgroundImage: `url(${Netflix})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-1xl font-bold text-white tracking-wider'>
                           Netflix Clone--In Progress
                       </span>
                       <div className='pt=8 text-center'>
                         {/* Hover Effects 
                           <a href='/'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                           <a href='/'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                           */}
                       </div>
                   </div>
               </div>






            </div>




        </div>

    </div>
  )
}

export default Work