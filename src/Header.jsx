import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";


export default function Header() {

  const [activeSection, setActiveSection] = useState("home");
  const sections = ["about", "experience", "project"];

    useEffect(() => {
    const sections = document.querySelectorAll("section");
   const observer = new IntersectionObserver(
  (section) => {
    section.forEach((entry) => { 
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  { threshold: 0.6 } 
);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (

<div className="flex flex-col xl:flex-row">
<div className="
  w-full 
  p-4         /* default padding for small screens */
  md:pl-12 md:pt-8  /* medium screens (768px+) */
  lg:pl-16 lg:pt-10 /* large screens (1024px+) */
  xl:pl-18 xl:pt-12 /* extra-large screens (1280px+) */
  bg-white text-left
  xl:fixed xl:top-0 xl:left-0 xl:h-screen xl:w-120
">

        <h1 className="text-6xl font-formyname text-blue-600 mt-[40px] font-bold">Ahmed Binas</h1>
        <h2 className="text-3xl font-formyname text-blue-600 mt-[10px]">web developer</h2>
        <h2 className=" font-bold text-blue-600 mt-[10px]">
         I build accessible, pixel-perfect digital <br/> experiences for the web.</h2>
<div className="flex hidden xl:block">
   <nav className="flex flex-col space-y-6 mt-10  ">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveSection(id)}
              className={`flex items-center space-x-3 cursor-pointer group ${
                activeSection === id
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              }`}
            >
              <div
                className={`w-6 h-1 rounded-sm transition-all duration-300 ${
                  activeSection === id
                    ? "w-12 bg-blue-600"
                    : "bg-gray-400 group-hover:w-12"
                }`}
              ></div>
              <span className="text-lg font-medium transition-colors duration-300">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            </a>
          ))}

  


</nav>



 

</div>

  <nav className="flex flex-row space-x-6 mt-10">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaGithub className="text-gray-500 hover:text-black text-2xl transition-transform transform " />
      </a>


       <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-gray-500 hover:text-blue-600 text-2xl transition-transform transform " />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaInstagram className="text-gray-500 hover:text-pink-500 text-2xl transition-transform transform " />
      </a>

      {/* Email */}
      <a
        href="mailto:ahmedbinaskp@gmail.com"
        className="group"
      >
        <MdEmail className="text-gray-500 hover:text-red-500 text-2xl transition-transform transform" />
      </a>

  </nav>


      </div>


<main className="flex-1  scroll-smooth">
<section
  id="about"
  className="min-h-screen bg-gray-100 flex justify-center px-6 md:px-12 xl:ml-64 xl:pl-70 pt-12"
>

  <div className="max-w-3xl text-left">
    <p className="text-xs md:text-base text-gray-700 leading-relaxed mb-4">
      I’m a developer passionate about crafting accessible, pixel-perfect web
      experiences that fuse thoughtful design with robust engineering.
    </p>
    <p className="text-xs md:text-base text-gray-700 leading-relaxed mb-4">
      I thrive at the intersection of design and development — building interfaces
      that look great, perform efficiently, and remain inclusive for all users.
    </p>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
      During my internship at{" "}
      <span className="font-semibold text-blue-600">Kaizen Star Technologies</span>,
      I worked independently to design, develop, and deploy the{" "}
      <span className="font-semibold">MySQLBackupApp</span> — an automated
      backup solution for clients like pharmacies and medical clinics.
    </p>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      My goal is to provide{" "}
      <span className="font-semibold text-blue-600">
        real-world solutions powered by artificial intelligence
      </span>
      , using my ability to break down complex problems and design systems that
      make people’s lives easier and more enjoyable. I’m driven to create tools
      that don’t just work — they delight, empower, and make everyday tasks
      simpler and more fun.
    </p>
  </div>
</section>

<section
  id="project"
  className="min-h-screen bg-gray-100 px-6 md:px-12 xl:ml-64 xl:pl-70 pt-12 flex flex-col gap-12"
>
  {/* Project 1 */}
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Image */}
    <div className="md:w-1/2">
      <img
        src="src\firstpage.PNG"
        alt="Project Screenshot"
        className="w-full h-50 object-cover rounded-lg"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 p-6 flex flex-col justify-center">
      <h3 className="text-2xl font-semibold mb-2">MySQL Backup App</h3>
      <p className="text-gray-600">
        An automation tool that creates scheduled database backups using SQL dump, 
        designed for pharmacies and medical clinics.
      </p>
    </div>
  </div>

  {/* Project 2 */}
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Image */}
    <div className="md:w-1/2">
      <img
        src="src\xando.PNG"
        alt="Project Screenshot"
        className="w-full h-40 object-cover rounded-lg"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 p-6 flex flex-col justify-center">
      <h3 className="text-2xl font-semibold mb-2">Weather W5d</h3>
      <p className="text-gray-600">
        Description of the second project goes here. Explain what it does and the technologies used.
      </p>
    </div>
  </div>

    {/* Project 1 */}
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Image */}
    <div className="md:w-1/2">
      <img
        src="src\clear_weatherwidget.png"
        alt="Project Screenshot"
        className=" w-full h-45 object-cover rounded-lg"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 p-6 flex flex-col justify-center">
      <h3 className="text-2xl font-semibold mb-2">MySQL Backup App</h3>
      <p className="text-gray-600">
        An automation tool that creates scheduled database backups using SQL dump, 
        designed for pharmacies and medical clinics.
      </p>
    </div>
  </div>
    {/* Project 1 */}
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Image */}
    <div className="md:w-1/2">
      <img
        src="src\335394121-30bc9124-c04a-4a04-911c-e007d3684aa0.png"
        alt="Project Screenshot"
        className="w-full h-50 object-cover rounded-lg"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 p-6 flex flex-col justify-center">
      <h3 className="text-2xl font-semibold mb-2">MySQL Backup App</h3>
      <p className="text-gray-600">
        An automation tool that creates scheduled database backups using SQL dump, 
        designed for pharmacies and medical clinics.
      </p>
    </div>
  </div>
</section>


      <a href="https://kaizendubai.com/" target="_blank" rel="noopener noreferrer">
    
    <section id="experience" className="min-h-screen bg-gray-100 flex  px-6 md:px-12 xl:ml-64 xl:pl-70 pt-33">
    
     <div className="max-w-3xl">
        
  

    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
      <span className="absolute xl:top-3 md:top-0 left-0  text-xs font-medium text-gray-600 px-10 py-7 ">
  2024 — present
</span>   <div className="p-6 md:p-8 ml-30 text-left ">
  
        <h3 className="text-xl font-medium text-gray-600">
          software engineer  — Dubai
        </h3> 
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Developed during my internship at{" "}
          <span className="font-semibold text-blue-600">
            Kaizen Star Technologies
          </span>, this project automated critical database backups for clients such
          as pharmacies and medical clinics.
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Built with <span className="font-semibold">C#</span> and SQL dump
          techniques, it eliminated the need for manual intervention by
          scheduling secure, regular backups.
        </p>
        <p className="text-sm md:text-base text-gray-700">
          This project strengthened my problem-solving skills and demonstrated my
          ability to take a solution from concept to deployment — delivering
          real-world impact.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
  <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
    SQL Dump
  </span>
  <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
    C#
  </span>
  <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
    Visual Studio Code
  </span>
</div> 



       
      </div>
    

      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  </div> 

    </section></a>
<footer className="text-gray-500 text-sm py-6 text-right">
  Conceptualized and handcrafted in Visual Studio Code.<br />
  Built with React and Tailwind CSS, deployed on Vercel.<br />
  Typography set in the Inter typeface.
</footer>

    <img
  src="src/rotation booth.gif"
  alt="Rotating Booth"
  className="absolute bottom right-5 w-20 h-20 object-contain"
 />


  </main>


  





</div>

  
  );
}  


