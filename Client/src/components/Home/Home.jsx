import Post from "../Post/Post"
import Sidebar from "../Sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar/>
      </div>
      <div className="pl-[15rem]">
        <Post/>
      </div>
    </div>
  )
}

export default Home