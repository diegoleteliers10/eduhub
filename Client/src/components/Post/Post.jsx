import { posts } from "../../assets/data" 
import './Post.css'

const Post = () => {

  const allPosts=posts.map((post)=>{
    return (
      <div key={post.id}>
        {/* <img src={post.imagePorfile} alt="pic" className=""/> */}
        {/* img es preeliminar primero codearemos el boceto */}
        <div className="rounded-full bg-gray-600 w-12 h-12"></div>
        <h3 className="font-sans font-normal">{post.username}</h3>
        <p className="font-sans font-normal">{post.description}</p>
        
      </div>
    )
  })
  return (
    <div className="flex flex-col">
      {allPosts}
    </div>
  )
}

export default Post