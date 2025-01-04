import React from 'react'
import './About_me.css'

function About_me() {
  const img = "https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/7713/97694/profile-1699385194-8c4ec3702110696c8f503d0aa666fd8e.jpg"
  return (
    <>
    <div className='flex items-center justify-around px-[10%] gap-6 mt-6 mb-6'>
      <div> <img src={img} alt="photo" className=' rounded-lg' /></div>
      <div><div className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi beatae asperiores ea corporis modi dolore porro quasi quas, eos, officia sit laudantium provident quisquam veniam explicabo unde est quidem voluptas.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit eius dicta? Minus laborum tenetur maxime quas facere, cum autem.</div>
      <div className=' html-css flex items-center justify-between'>
        <div>Html & CSS</div>
        <div className='h-[5px] w-[40%] bg-red-300 bg-gradient-to-r from-pink-500 to-orange-500 to-90%'></div>
      </div>
      <div className=' html-css flex items-center justify-between'>
        <div>React</div>
        <div className='h-[5px] w-[30%] bg-red-300 bg-gradient-to-r from-pink-500 to-orange-500 to-90%'></div>
      </div>
      <div className=' html-css flex items-center justify-between'>
        <div>Javascript</div>
        <div className='h-[5px] w-[50%] bg-red-300 bg-gradient-to-r from-pink-500 to-orange-500 to-90%'></div>
      </div>
      </div>
    </div>
    <div className='px-[20px] py-[40px] flex items-center justify-around text-4xl '>
      <div><div className='bg-gradient-to-r from-pink-500 to-orange-500 to-90% inline-block text-transparent bg-clip-text'>10+</div> <br /><div className='text-xl items-center justify-center '>year of experience</div></div>
      <div class="vl"></div>
      <div><div className='bg-gradient-to-r from-pink-500 to-orange-500 to-90% inline-block text-transparent bg-clip-text'>2 </div> <br /><div className='text-xl items-center justify-center '>happy clients</div></div>
      <div class="vl"></div>
      <div><div className='bg-gradient-to-r from-pink-500 to-orange-500 to-90% inline-block text-transparent bg-clip-text'>2</div> <br /><div className='text-xl items-center justify-center '>projects</div></div>
    </div>
    </>
  )
}

export default About_me
