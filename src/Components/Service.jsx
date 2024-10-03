import { FaVideo, FaCogs, FaPaintBrush, FaLaptopCode } from "react-icons/fa"; // Icons for services

function Services() {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">My Services</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Service 1 - Right and Top Border */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center border-r-4 border-t-4 border-blue-500">
          <FaVideo className="text-6xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Video Editing</h3>
          <p className="mt-4 text-gray-600">
            High-quality video editing services to bring your ideas to life with professional results.
          </p>
        </div>

        {/* Service 2 - Left and Bottom Border */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center border-l-4 border-b-4 border-green-500">
          <FaLaptopCode className="text-6xl text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Full Stack Development</h3>
          <p className="mt-4 text-gray-600">
            Expertise in building responsive web applications using modern technologies.
          </p>
        </div>

        {/* Service 3 - Right and Top Border */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center border-r-4 border-t-4 border-pink-500">
          <FaPaintBrush className="text-6xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Graphic Design</h3>
          <p className="mt-4 text-gray-600">
            Eye-catching designs that communicate your brand’s message and captivate audiences.
          </p>
        </div>

        {/* Service 4 - Left and Bottom Border */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center border-l-4 border-b-4 border-yellow-500">
          <FaCogs className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">CCTV Installation & Setup</h3>
          <p className="mt-4 text-gray-600">
            Secure and professional CCTV system installation for both businesses and homes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
