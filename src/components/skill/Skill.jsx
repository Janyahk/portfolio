
const Skill = ({image,name}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 transition-all duration-300 rounded-2xl shadow-md hover:shadow-purple-500/40 w-32 h-32 md:w-40 md:h-40 cursor-pointer transform hover:-translate-y-2 text-black text-sm md:text-base ">
      <img src={image} alt={name} className="w-12 h-12 mb-2" />
      <p className="font-medium hover:font-bold ">{name}</p>
    </div>
  )
}

export default Skill
