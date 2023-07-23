import Home from "../../components/Home/Home"
import Navbar from "../../components/Navbar/Navbar"

const Homeview = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar/>
      <div className="pt-[5rem]">
        <Home/>
      </div>
    </div>
  )
}

export default Homeview