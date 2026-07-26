import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSnapchat } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-10 relative">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Abdirahman Abdalla Nasser. All Rights Reserved.</p>
        <p>Connect with me:</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Snapchat */}
          <a
            href="https://snapchat.com/t/Lb8eRnkU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faSnapchat} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/armaan__mk32?igsh=Z2o3MmJlM2ViMXIz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-pink-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
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
        <i class="fa-brands fa-square-whatsapp"></i> {/* Correct FontAwesome icon */}
      </a>
    </footer>
  );
}

export default Footer;
