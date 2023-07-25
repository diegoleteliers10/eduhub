import './Post.css'


const Post = (props) => {
  const {id, username, description} = props
     return <div key={id} className='bg-[#00000014] py-2 px-3 rounded-md'>
        {/* <img src={post.imagePorfile} alt="pic" className=""/> */}
        {/* img es preeliminar primero codearemos el boceto */}
        <div className="rounded-full bg-gray-600 w-12 h-12"></div>
        <h3 className="font-sans font-normal">{username}</h3>
        <p className="font-sans font-normal">{description}</p>
      </div>
}

export default Post