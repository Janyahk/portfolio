
import Project from './Project'

import todo from '../../assets/todolist.png'
import lottery from "../../assets/lottery.png"
import simon from "../../assets/simongame.png"
import wanderlust from "../../assets/wandelust.png"
import ZenGPT from "../../assets/ZenGPT.png"
import beauty from "../../assets/beautyhub.png"
const Projects = () => {
  const projects=[
    {
      "id":1,
    "link": "https://wanderlust-5kpx.onrender.com/listings",
    "name": "WanderLust",
    "description": "Public",  
    "photo": wanderlust
  },
   {
    "id":2,
    "link": "https://gptzen-frontend.onrender.com/",
    "name": "ZenGPT",
    "description": "Public",  
    "photo": ZenGPT
  },
    {
      "id":3,
    "link": "https://beautyhub-frontend.onrender.com/",
    "name": "Beauty Hub",
    "description": "Public",  
    "photo":beauty
  },

  {
    "id":4,
    "link": "https://janyahk.github.io/lotteryticket/",
    "name": "lotteryticket",
    "description": "Public",  
    "photo": lottery
  },
  {
    "id":5,
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
    "id":6,
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
          <Project     key={p.id} a={p.link} name={p.name} img={p.photo}></Project>
        ))
        }
    </div>  
    </div>
  )
}

export default Projects
