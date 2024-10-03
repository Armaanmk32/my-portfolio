import { useState } from "react";

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
            <div className="sm:flex bg-white sm:mx-20 py-4 my-3 px-5 items-center top-0 left-0 right-0 rounded-lg sm:rounded-full shadow-black shadow-2xl justify-between">
                <h1 className="text-3xl font-serif font-bold">ARMAAN</h1>

                {/* Ul-ka waxaan ku isticmaalay hidden iyo block si aad u qarisid mobile-ka */}
                <ul className={`gap-10 ${visible ? "block" : "hidden"} sm:flex`}>
                    <li className="text-xl">Home</li>
                    <li className="text-xl">Products</li>
                    <li className="text-xl">About Us</li>
                    <a href="https://wa.me/2520616739858" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <li className="text-xl">Contact Me</li>
                    </a>
                </ul>

                <div className="gap-5 flex">
                    {/* Button-ka 'Contact Me' waxaan ku isticmaalay block iyo none */}
                    <button
                        className={`bg-white border-2 border-[#000000] shadow-inner shadow-black text-black mr-2 rounded-md px-7 py-1 ${visible ? "block" : "hidden"
                            }`}
                    >
                        Contact Me
                    </button>
                </div>

                {/* Icons-ka (fa-bars iyo fa-circle-xmark) */}
                <div>
                    <i
                        onClick={handleClick}
                        className={`text-4xl sm:hidden absolute top-7 right-4 fa-solid fa-bars ${visible ? "hidden" : "block"}`}
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
