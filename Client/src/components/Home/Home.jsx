import Post from "../Post/Post"
import Sidebar from "../Sidebar/Sidebar"
import {posts} from "../../assets/data"

const Home = () => {

  const postData=posts.map((post)=>{
    return <Post key={post.id}
    id={post.id}
    username={post.username}
    description = {post.description}
    />
  })

  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar/>
      </div>
      <div className="pl-[15rem] flex flex-col gap-2">
        {postData}
      </div>
    </div>
  )
}

export default Home