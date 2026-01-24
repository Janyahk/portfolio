
import './hero.css'
import janu from '../../assets/janu.jpg'
import resume from '..//../assets/janyahk.pdf'

const Hero = ({ onSectionChange }) => {
   const handleClick = (section) => {
    onSectionChange(section);
   
  };
  return (
    <div className='hero'>
        <img src={janu} alt=''  className='img'/>
      <h1><span>I'm Janya HK</span>, full stack developer </h1>
      <p>I’m a passionate  Full Stack Developer who loves building modern, efficient, and user-friendly web applications.</p>
      <div className="hero-action">
        <div className="hero-connect" onClick={() => handleClick('contact')}>connect with me</div>
       <a href={resume} target="_blank" rel="noopener noreferrer"><div className="hero-resume">My resume</div></a>
      </div>
    </div>
  )
}

export default Hero
