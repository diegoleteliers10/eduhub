import { cursos } from "../../assets/data" 
import './Sidebar.css'

const Sidebar = () => {

  const Cursos= cursos.map((curs)=>{
    return <li key={curs.id} className="list-none group hover:cursor-pointer" >
      <div className="px-3 py-2 rounded-md hover:bg-[#5f5f5f3b] hover:duration-200">
        <button className="text-[#000000] font-sans font-semibold text-lg">{curs.nombre}</button>
      </div>
      </li>
  })

  return (
    <div className="flex flex-col gap-12 box-borde h-[calc(100vh-100px)] w-[12rem] pl-3">
      <ul className="overflow-y-auto h-[65vh] overflow-x-hidden flex flex-col gap-1">
        {Cursos}
      </ul>
      <button className="p-2 bg-[#833400af] rounded-md w-[7rem] hover:shadow-lg hover:bg-[#833400] hover:scale-110">Create Post</button>
    </div>
  )
}

export default Sidebar