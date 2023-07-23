import { useState } from "react"
import './Navbar.css'


const Navbar = () => {

  const [userPanel,setUserPanel]=useState(false)

  const handleUserPanel=()=>{
    setUserPanel(!userPanel)
  }

  return (
    <div className="w-screen h-16 bg-[#C2BAA6] fixed flex items-center justify-between px-5 z-[9998] box-border"> 
      <div className="w-[80px] h-[40px] bg-[#e0e0e0]"></div>
      <div className="flex items-center justify-around gap-6">
        <div className="flex items-center justify-around gap-2">
          <div className="group hover:cursor-pointer px-6 py-1 rounded-md hover:bg-[#e1cda0a9] hover:duration-200"><h3 className="text-[#ffffff] font-bold text-lg">Home</h3></div>
          <div className="group hover:cursor-pointer px-6 py-1 rounded-md hover:bg-[#e1cda0a9] hover:duration-200"><h3 className="text-[#Ffffff] font-bold text-lg">My Posts</h3></div>
          <div className="group hover:cursor-pointer px-6 py-1 rounded-md hover:bg-[#e1cda0a9] hover:duration-200"><h3 className="text-[#Ffffff] font-bold text-lg">Chat</h3></div>
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-[#e0e0e0] cursor-pointer" onClick={handleUserPanel}></div>
        {
          userPanel && 
          <div id="user-panel" className="p-3 absolute top-[4.1rem] right-[1rem] rounded-md bg-[#e1cda0a9] flex flex-col gap-2 transition">
            <div className="group hover:cursor-pointer hover:bg-[#83340036] rounded-md px-2 py-1"><span className="text-white">Profile</span></div>
            <div className="group hover:cursor-pointer hover:bg-[#83340036] rounded-md px-2 py-1"><span className="text-white">Saved Posts</span></div>
            <div className="group hover:cursor-pointer hover:bg-[#83340036] rounded-md px-2 py-1"><span className="text-white">Log out</span></div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar