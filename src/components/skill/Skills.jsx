import Skill from './Skill'


const Skills = () => {
    const skills = [
  {
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  }]
  return (
    <div className=''>
        <div className="flex px-50 my-5 justify-center">
                <h1 className="text-7xl font-bold bg-[url('assets/nav_underline.svg')] bg-no-repeat bg-right-bottom bg-[length:100px]">Skills</h1>
                {/* <img src={about} alt="" className="m-0 h-20 w-20" /> */}
              </div>
    <div className="flex flex-wrap gap-6 justify-center items-center bg-gray-900 min-h-screen px-30">
        
      {skills.map((skill) => (
        <Skill 
          key={skill.name}        // ✅ unique key (React requires this)
          name={skill.name}        // ✅ passing 'name' prop
          image={skill.image}      // ✅ passing 'image' prop
        />
      ))}
    </div>
    </div>
   
  )
}

export default Skills
