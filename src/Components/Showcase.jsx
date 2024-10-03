import arman from "../Images/arman.png";

function Showcase() {
    return (
        <div className="relative sm:h-[480px] h-[680px] px-5 md:px-20 text-white bg-gradient-to-r from-white to-black">
            {/* Falaadhaha dhinacyada (Right and Left) */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-transparent border-l-[30px] border-l-white"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[30px] border-b-transparent border-r-[30px] border-r-white"></div>

            <div className="flex flex-col md:flex-row justify-around items-center pt-10">
                <div className="w-full md:w-[300px] text-black text-center md:text-left">
                    <h1 className="text-2xl font-semibold">Hello, I'm</h1>
                    <h1 className="text-3xl text-black font-bold">Abdirahman Abdalla Nasser</h1>
                    <p className="pb-2">and I'm a web developer</p>
                    <div className="flex justify-center md:justify-start pb-0 gap-2">
                        <button className="border-2 font-bold font-serif py-1 border-black rounded-md px-5">Resume</button>
                        <button className="border-2 font-bold font-serif py-1 border-black rounded-md px-5">Portfolio</button>
                    </div>
    
                    <div className="flex justify-center md:justify-start text-black gap-2">
                        <a href="https://www.instagram.com/armaan__mk32?igsh=Z2o3MmJlM2ViMXIz&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands text-4xl mt-4 fa-square-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/abdirahman.abdullahi.58173?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands text-4xl mt-4 fa-square-facebook"></i>
                        </a>
                        <a href="https://github.com/Armaanmk32" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands text-4xl mt-4 fa-square-github"></i>
                        </a>
                        <a href="https://x.com/abdirah42874571?s=21" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands text-4xl mt-4 fa-square-x-twitter"></i>
                        </a>
                    </div>
                </div>
                
                <div className="bg-[#ffffff] shadow-inner shadow-black mt-10 rounded-full">
                    <img className="w-[310px] h-[310px] rounded-full" src={arman} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default Showcase;
