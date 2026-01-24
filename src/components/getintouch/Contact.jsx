import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  const res = await fetch("http://localhost:5000/send-mail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (data.success) {
    alert("Message sent successfully 😎");
    e.target.reset();
  } else {
    alert("Message sending failed 😭");
  }
};

  return (
    <div className='my-16 px-6 md:px-20'>
      
      {/* Heading */}
      <div className='flex justify-center items-center gap-3 mb-10'>
        <h1 className="text-4xl md:text-6xl font-bold bg-[url('assets/nav_underline.svg')] bg-no-repeat bg-right-bottom bg-[length:100px]">Get in Touch</h1>
        {/* <img src={about} alt="" className="h-12 w-12 md:h-20 md:w-20" /> */}
      </div>

      {/* Content Layout */}
      <div className='flex flex-col md:flex-row gap-10'>
        
        {/* Left side */}
        <div className='w-full md:w-1/2 p-2'>
          <h1 className='text-4xl md:text-5xl mb-3 bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent inline-block'>
            Lets talk
          </h1>

          <p className='mb-6 text-base md:text-lg leading-relaxed'>
            I’m currently looking for exciting job or internship opportunities where I can learn,
            contribute, and grow as a developer. If you think I could be a good fit for your team,
            feel free to reach out — I’d love to connect!
          </p>

          <div className='flex items-center gap-3 my-3 text-lg'>
            <MdEmail /> 
            <span>janyahkumarappa@gmail.com</span>
          </div>

          <div className='flex items-center gap-3 my-3 text-lg'>
            <FiPhone />
            <span>9019990393</span>
          </div>

          <div className='flex items-center gap-3 my-3 text-lg'>
            <FaMapMarkerAlt />
            <span>Bengluru, India</span>
          </div>
        </div>

        {/* Right side (form) */}
        <div className='w-full md:w-1/2 p-2'>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            
            {/* Name */}
            <div>
              <label htmlFor="name" className='text-lg'>Your Name</label>
              <input 
                type='text'
                id='name' 
                name='name'
                required
                className='mt-2 bg-gray-200 text-black rounded-xl h-10 w-full px-4 outline-none focus:ring-2 focus:ring-purple-400'
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className='text-lg'>Your Email</label>
              <input 
                type='email'
                id='email' 
                name='email'
                required
                className='mt-2 bg-gray-200 text-black rounded-xl h-10 w-full px-4 outline-none focus:ring-2 focus:ring-purple-400'
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="mess" className='text-lg'>Your Message</label>
              <textarea
                id='mess' 
                name='message'
                className='mt-2 bg-gray-200 text-black rounded-xl h-32 w-full p-4 outline-none focus:ring-2 focus:ring-purple-400 resize-none'
              ></textarea>
            </div>

            {/* Button */}
            <button 
              type='submit' 
              className="w-32 h-12 border-2 border-white rounded-2xl mx-auto md:mx-0 hover:bg-white hover:text-black transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
