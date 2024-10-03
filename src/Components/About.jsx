import arman from "../Images/arman.png";

function About() {
  return (
    <div className="px-5 md:px-20">
      <h1 className="text-4xl text-center mt-5 font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row justify-around items-center mb-10 mt-10">
        <div className="mt-8">
          <img className="w-[320px] shadow-black shadow-2xl rounded-full h-[320px]" src={arman} alt="Abdirahman Abdalla Nasser" />
        </div>
        <div className="w-full md:w-[500px] mt-6 md:mt-0 md:ml-10">
          <h2 className="font-semibold">Hi, I'm</h2>
          <h1 className="text-3xl mt-2 font-bold">Abdirahman Abdalla Nasser</h1>
          <p className="mt-2">
            I am a passionate full stack developer with a strong background in creating dynamic and interactive web applications. With expertise in both frontend and backend development, I specialize in using technologies like React.js, Node.js, MongoDB, and Express to build scalable and efficient solutions. 
            <br />
            I am also a skilled graphic designer, video editor, and CCTV system expert, which gives me a unique ability to blend technical development with creative design.
            <br />
            My journey in the tech world has been driven by a desire to constantly learn new skills and improve my craft, ensuring that I stay ahead of the ever-evolving trends in the industry. I thrive on problem-solving and enjoy working on challenging projects that push my limits.
          </p>
          <button className="bg-black text-white py-2 mt-4 shadow-black shadow-2xl rounded-md px-5 hover:bg-gray-800 transition duration-200">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default About;
