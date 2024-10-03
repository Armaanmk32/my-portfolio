import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"; // Import WhatsApp and other icons

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 relative">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Abdirahman Abdalla Nasser. All Rights Reserved.</p>
        <p>Connect with me:</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/abdirahman.abdullahi.58173?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/abdirah42874571?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Armaanmk32"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      {/* WhatsApp Icon Fixed */}
      <a
        href="https://wa.me/2520617942032?text=Hello%20Abdirahman!" // WhatsApp link with message
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 text-green-600 text-5xl z-50"
      >
        <FontAwesomeIcon icon={faWhatsapp} /> {/* Correct FontAwesome icon */}
      </a>
    </footer>
  );
}

export default Footer;
