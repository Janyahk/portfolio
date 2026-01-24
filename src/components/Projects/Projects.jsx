
import Project from './Project'

import todo from '../../assets/todolist.png'
import lottery from "../../assets/lottery.png"
import simon from "../../assets/simongame.png"
import wanderlust from "../../assets/wandelust.png"
const Projects = () => {
  const projects=[
    {
    "link": "https://wanderlust-5kpx.onrender.com/listings",
    "name": "WanderLust",
    "description": "Public",  
    "photo": wanderlust
  },

  {
    "link": "https://janyahk.github.io/lotteryticket/",
    "name": "lotteryticket",
    "description": "Public",  
    "photo": lottery
  },
  {
    "link": "https://janyahk.github.io/todolist/",
    "name": "todolist",
    "description": "Public",  
    "photo": todo
  },
  // {
  //   "link": "https://github.com/Janyahk/weather",
  //   "name": "weather",
  //   "description": "Public",  
  //   "photo": "https://via.placeholder.com/300?text=weather"
  // },
  {
    "link": "https://janyahk.github.io/simon-game/",
    "name": "simon-game",
    "description": "Public",  
    "photo":simon
  }
]

  return (
    <div className='mx-30'>
      <div className="flex px-20 pt-10 justify-center">
          <h1 className="text-7xl font-bold bg-[url('assets/nav_underline.svg')] bg-no-repeat bg-right-bottom bg-[length:100px] ">Project</h1>
              {/* <img src={about} alt=" " className="m-0 h-20 w-20" /> */}
      </div>
        <div className="flex mt-10 flex-wrap gap-6 justify-center  items-center bg-gray-900 ">
        
        {projects.map((p)=>(
          <Project a={p.link} name={p.name} img={p.photo}></Project>
        ))
        }
    </div>  
    </div>
  )
}

export default Projects
