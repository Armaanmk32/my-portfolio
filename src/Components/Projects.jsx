import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Import from 'swiper/modules' for v11
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Pagination styles

import leyliin from "../Images/leyliin.png";
import rizaana from "../Images/rizaana.png";
import cleaning from "../Images/cleaning.png";
import company from "../Images/company.png";
import resturant from "../Images/resturant.png";
import resturant2 from "../Images/resturant2.png";
import resturant3 from "../Images/resturant3.png";
import resturant4 from "../Images/resturant4.png";
import resturant5 from "../Images/resturant5.png";

function Projects() {
    const [selectedImage, setSelectedImage] = useState(null); // State si sawirka modal loogu soo bandhigo

    const projects = [
        {
            title: "E-learning project",
            description: "This project is a gift I built for my mother as a special token of appreciation.",
            image: leyliin
        },
        
        {
            title: "Boutique project",
            description: "This e-commerce project focuses on marketing and selling various products, providing users with a seamless shopping experience.",
            image: rizaana
        },
        
        {
            title: "kinds Project",
            description: "This project focuses on providing cleaning services, ensuring that spaces are spotless and well-maintained for clients.",
            image: cleaning
        },
        
        {
            title: "lotion  Project",
            description: "This project focuses on the construction of residential buildings, providing quality housing solutions for families and individuals.",
            image: company
        },
        
        {
            title: "E-Commerce Project",
            description: "This project focuses on establishing a restaurant that offers a variety of cuisines, providing a delightful dining experience for customers.",
            image: resturant
        },
        {
            title: "Islamic dress Project",
            description: "This project focuses on establishing a restaurant that offers a variety of cuisines, providing a delightful dining experience for customers.",
            image: resturant2
        },
        {
            title: "Shois Project",
            description: "This project focuses on establishing a restaurant that offers a variety of cuisines, providing a delightful dining experience for customers.",
            image: resturant3
        },
        {
            title: "Hand bag Project",
            description: "This project focuses on establishing a restaurant that offers a variety of cuisines, providing a delightful dining experience for customers.",
            image: resturant4
        },
        {
            title: "Online course Project",
            description: "This project focuses on establishing a restaurant that offers a variety of cuisines, providing a delightful dining experience for customers.",
            image: resturant5
        }
        
    ];

    // Function lagu furayo modal-ka
    const openModal = (image, e) => {
        e.preventDefault(); // Ka hortag behavior-ka default
        setSelectedImage(image); // Dejinta sawirka la gujiyay
    };

    // Function lagu xirayo modal-ka
    const closeModal = () => {
        setSelectedImage(null); // Xiritaanka modal-ka
    };

    return (
        <div className="my-10 text-center px-10">
            <h1 className="text-4xl font-bold mb-5">My Creative Projects</h1> {/* Magaca la beddelay */}
            <Swiper
                modules={[Navigation, Pagination]} // Ku dar Navigation iyo Pagination modules
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next', // Falaaraha xiga
                    prevEl: '.swiper-button-prev', // Falaaraha hore
                }}
                pagination={{ clickable: true }} // Pagination clickable ah
                breakpoints={{
                    768: {
                        slidesPerView: 2, // 2 slides shaashadda dhexdhexaad
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides shaashadda weyn
                    }
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="border border-[#000000] rounded-lg shadow-lg overflow-hidden">
                            <a href={project.link} onClick={(e) => openModal(project.image, e)}> {/* Prevent default */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover cursor-pointer"
                                />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation arrows */}
            <div className="swiper-button-prev text-3xl text-[#ff6d00] z-10"></div> {/* Falaar hore */}
            <div className="swiper-button-next text-3xl text-[#ff6d00] z-10"></div> {/* Falaar gadaal */}

            {/* Modal-ka si uu u soo bandhigo sawirka weyn */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative">
                        <img src={selectedImage} alt="Enlarged Project" className="max-w-full max-h-full" />
                        <button className="absolute top-0 right-0 text-red-500 text-5xl p-2" onClick={closeModal}>
                            &times; {/* Xir button */}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
