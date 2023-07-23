

const Landing = () => {
  return (
    <div className="h-screen w-screen bg-[#F5ECD7] flex justify-center items-center">
      <div className="pl-[15rem] pb-[7rem]">
        <div className="flex flex-col">
          <p className="text-[#353535] text-xl font-normal relative top-6">Aprende y comparte con otros estudiantes</p>
          <h1 className="text-[#8FBF9F] font-normal text-[5rem]">EDUHUB</h1>
        </div>
        <h3 className="text-[#5F5F5F] text-lg font-normal w-[45%]">Aquí puedes dejar tus dudas sobre tus trabajos, pruebas y materias, y donde puedes chatear con otros estudiantes sobre ellas. ¿Qué esperas? Únete a nuestra comunidad y empieza a explorar.</h3>
        <div className="flex relative top-8 gap-12">
          <button className="hover:bg-[#68A67D] hover:text-[#ffffff] rounded-md text-[#68A67D] font-semibold text-xl px-8 py-2 border-[1px] border-solid border-[#68A67D] ease-in duration-200"> Sign In</button>
          <button className="hover:bg-[#68A67D] hover:text-[#ffffff] rounded-md text-[#68A67D] font-semibold text-xl px-8 py-2 border-[1px] border-solid border-[#68A67D] ease-in duration-200"> Sign Up</button>
        </div>
        
      </div>
      <div></div>
    </div>
  )
}

export default Landing