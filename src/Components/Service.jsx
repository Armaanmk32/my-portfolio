import { FaVideo, FaCogs } from "react-icons/fa";

function Service() {
  const colorClasses = {
    blue: "border-blue-500 text-blue-500",
    green: "border-green-500 text-green-500",
    pink: "border-pink-500 text-pink-500",
    yellow: "border-yellow-500 text-yellow-500",
    purple: "border-purple-500 text-purple-500"
  };

  const services = [
    {
      title: "Content Creation",
      icon: <FaVideo />,
      color: "blue",
      description:
        "Creating engaging social media content, short-form videos, and visual storytelling to connect audiences."
    },
    {
      title: "CCTV System Expertise",
      icon: <FaCogs />,
      color: "yellow",
      description:
        "Installation, configuration, and troubleshooting of CCTV and security camera systems for homes and businesses."
    },
    {
      title: "Video Editing",
      icon: <FaVideo />,
      color: "green",
      description:
        "Editing and post-production for videos, including cutting, color grading, and motion graphics."
    }
  ];

  return (
    <div className="bg-gray-100 py-16">

      <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
        My Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">

        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white p-8 shadow-lg rounded-lg text-center border-t-4 ${colorClasses[service.color]}`}
          >

            <div
              className={`text-6xl ${colorClasses[service.color]} mx-auto mb-5 flex justify-center`}
            >
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {service.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Service;