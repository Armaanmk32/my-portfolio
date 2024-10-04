import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClosek = () => {
        setVisible(false);
    };

    return (
        <div>
            <div className="sm:flex bg-white relative sm:mx-20 py-4 my-3 px-5 items-center top-0 left-0 right-0 rounded-lg sm:rounded-full shadow-black shadow-2xl justify-between">
                <h1 className="text-2xl font-bold">ARMAN</h1>

                {/* Navigation menu */}
                <ul className={`gap-10 ${visible ? "block" : "hidden"} sm:flex`}>
                    <Link to="/">
                        <li className="text-xl">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="text-xl">About Me</li>
                    </Link>
                    <Link to="/skills">
                        <li className="text-xl">My Skills</li>
                    </Link>
                    <Link to="/service">
                        <li className="text-xl">Services</li>
                    </Link>
                    <Link to="/projects">
                        <li className="text-xl">Projects</li>
                    </Link>
                </ul>

                <div className="absolute top-5 sm:top-4 right-20 sm:right-10"> {/* Waxaad bedeshay right-ka */}
                    {/* Button to Download CV - now shown on both mobile and desktop */}
                    <a 
                        href="/cv.pdf" // Halkaas geli url-ka saxda ah
                        download // Kani wuxuu u oggolaanayaa in faylka la soo dejiyaa
                        className="bg-white border-2 border-[#000000] shadow-inner shadow-black text-black rounded-md px-5 py-1 hidden sm:block sm:ml-10" // Wax yar ayaan ku daray margin-left (sm:ml-10) si loo kala fogeeyo
                    >
                        Download My-CV
                    </a>

                    {/* Button to Download CV for mobile view */}
                    <a 
                        href="/cv.pdf" // Halkaas geli url-ka saxda ah
                        download // Kani wuxuu u oggolaanayaa in faylka la soo dejiyaa
                        className="bg-white border-2 border-[#000000] shadow-inner shadow-black text-black rounded-md px-5 py-1 sm:hidden"
                    >
                        Download My-CV
                    </a>
                </div>

                {/* Icons for mobile */}
                <div>
                    <i
                        onClick={handleClick}
                        className={`text-4xl sm:hidden absolute top-3 right-4 fa-solid fa-bars ${visible ? "hidden" : "block"}`}
                    ></i>
                    <i
                        onClick={handleClosek}
                        className={`text-5xl sm:hidden absolute top-3 right-2 fa-solid fa-circle-xmark ${visible ? "block" : "hidden"}`}
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
