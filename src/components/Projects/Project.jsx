

const Project = ({a,name,img}) => {
  return (
    <div className="flex flex-col items-center justify-center w-72 h-72 mt-3 border-2 border-amber-50 rounded-2xl bg-gray-900 p-3 
  transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#fff] hover:border-amber-50">
  <a href={a} target="_blank">
  <img 
    src={img} 
    alt="React Todo List" 
    className="w-70 h-58 object-cover rounded-xl mb-2  mt-3 transition-transform duration-300 " 
  />
  
  <h1 className="font-semibold text-center text-white text-lg mb-1 transition-colors duration-300 hover:text-amber-300">
{name}  </h1>
  </a>
  
</div>


  )
}

export default Project
