import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush, faVideo, faCamera } from "@fortawesome/free-solid-svg-icons"; // Changed faCctv to faCamera

function Skills() {
  return (
    <div className="bg-gray-100 py-10 px-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Full Stack Development */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faCode} size="3x" className="text-[#ff6d00] mb-4" />
          <h2 className="text-2xl font-bold mb-2">Full Stack Development</h2>
          <p className="text-gray-600">
            Expertise in React.js, Node.js, MongoDB, and Express. Building dynamic, scalable, and efficient web applications.
          </p>
        </div>

        {/* Graphic Design */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faPaintBrush} size="3x" className="text-[#ff6d00] mb-4" />
          <h2 className="text-2xl font-bold mb-2">Graphic Design</h2>
          <p className="text-gray-600">
            Skilled in creating visually appealing designs using tools like Adobe Photoshop and Illustrator.
          </p>
        </div>

        {/* Video Editing */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faVideo} size="3x" className="text-[#ff6d00] mb-4" />
          <h2 className="text-2xl font-bold mb-2">Video Editing</h2>
          <p className="text-gray-600">
            Proficient in editing and producing high-quality videos with Adobe Premiere Pro and Final Cut Pro.
          </p>
        </div>

        {/* CCTV Systems */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faCamera} size="3x" className="text-[#ff6d00] mb-4" /> {/* Changed faCctv to faCamera */}
          <h2 className="text-2xl font-bold mb-2">CCTV System Expertise</h2>
          <p className="text-gray-600">
            Experienced in installing and managing CCTV systems, ensuring top-notch security solutions.
          </p>
        </div>

        {/* Problem Solving */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faCode} size="3x" className="text-[#ff6d00] mb-4" />
          <h2 className="text-2xl font-bold mb-2">Problem Solving</h2>
          <p className="text-gray-600">
            Passionate about solving complex problems and continuously learning new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
