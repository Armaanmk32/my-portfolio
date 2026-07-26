import arman from "../Images/armaan2.jpg";
function About() {
  const handleContactClick = () => {
    window.open("https://wa.me/2520617942032", "_blank");
  };

  return (
    <div className="px-5 md:px-20">
      <h1 className="text-4xl text-center mt-5 font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row justify-around items-center mb-10 mt-10">
        <div className="mt-8">
          <img
            className="h-[320px] w-[320px] rounded-full object-cover object-top shadow-2xl shadow-black"
            src={arman}
            alt="Abdirahman Abdalla Nasser"
          />
        </div>
        <div className="w-full md:w-[500px] mt-6 md:mt-0 md:ml-10">
          <h2 className="font-semibold">Hi, I'm</h2>
          <h1 className="text-3xl mt-2 font-bold">Abdirahman Abdalla Nasser</h1>
          <p className="mt-2 text-gray-700 leading-relaxed">
            <strong>Professional Summary</strong>
            <br />
            I am a passionate Content Creator with a background in Full Stack Development, Graphic Design, Video Editing, and CCTV System Expertise. I specialize in creating engaging digital content, combining creativity and technology to deliver high-quality visual experiences. With a strong interest in technology and digital trends, I continuously develop my skills to create valuable content and innovative solutions.
          </p>
          <button 
            className="bg-black text-white py-2 mt-4 shadow-black shadow-2xl rounded-md px-5 hover:bg-gray-800 transition duration-200"
            onClick={handleContactClick}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
