
const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-20" id="about">

      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <h1 className="text-7xl md:text-5xl lg:text-6xl font-bold text-center bg-[url('assets/nav_underline.svg')] bg-no-repeat bg-right-bottom bg-[length:100px]">
          About me
        </h1>
        {/* <img src={about} alt="pattern" className="h-10 w-10 md:h-14 md:w-14" /> */}
      </div>

      {/* Paragraph 1 */}
      <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
        Hi, I’m{" "}
        <span className="bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent font-bold">
          Janya HK
        </span>, 
        a passionate and detail-oriented{" "}
        <span className="bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent font-bold">
          Full Stack Developer
        </span>{" "}
        with a strong foundation in both front-end and back-end technologies.
        I have completed my{" "}
        <span className="bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent font-bold">
          Bachelor of Engineering (B.E.) in Information Science and Engineering
        </span>{" "}
        from Jawaharlal Nehru New College of Engineering, Shimoga, where I built
        a solid understanding of software development, databases, and system design.
      </p>

      {/* Paragraph 2 */}
      <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-5">
        I specialize in technologies such as{" "}
        <span className="bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent font-bold">
          React, Node.js, Express, MongoDB, and Java
        </span>, 
        creating responsive and user-focused web applications. I’m deeply motivated
        by solving real-world problems through technology and continuously strive
        to learn and adapt to new tools and frameworks.
      </p>

    </div>
  );
};

export default About;
