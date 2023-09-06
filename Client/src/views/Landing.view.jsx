import React from 'react'

const Landing = () => {
  return (
    <div>
      <div id='landing_container' class='w-screen h-screen bg-[#108e97] flex justify-center items-center'>
        <div class='flex'>
          <section class='flex flex-col justify-center w-[500px]'>
            <h3 class='text-[#323030] text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit</h3>
            <h1 class='text-white text-[5rem] font-bold'>EDUHUB</h1>
            <p class='text-[#070707] text-lg font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deleniti consectetur, ipsam eligendi, totam perferendis est placeat molestias nam harum eius ab. Exercitationem alias, nisi quibusdam iste ratione eos enim.</p>
            <div class='flex justify-center gap-5 mt-4 '>
              <button class='bg-white py-2 px-8 rounded-full font-semibold text-xl border-[1px] border-[#000000] hover:bg-[#108e97] hover:text-[#000000]'>Sign-In</button>
              <button class='bg-white py-2 px-8 rounded-full font-semibold text-xl border-[1px] border-[#000000] hover:bg-[#108e97] hover:text-[#000000]'>Sign-Up</button>
            </div>
          </section>
          <section class='bg-white w-[500px] h-[300px]'>
            <img src="" alt="" />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Landing
