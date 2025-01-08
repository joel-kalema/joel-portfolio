"use client";
import Image from "next/image";
import { Link } from "next-scroll";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaAngellist } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { IoHappyOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [formData, setFormData] = useState({ Name: "", Email: "", Message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.Name || !formData.Email || !formData.Message) {
            setStatusMessage("Please fill in all fields before submitting.");
            setOpen(true);
            return;
        }

        const formElement = e.target;
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxDQAONdQbjoauG_zES8B0px6K9yvZ36Y3ScYpBla0N83EWfZbePObUOTdKsJU5hLfn/exec",
                {
                    method: "POST",
                    body: new FormData(formElement),
                }
            );

            if (response.ok) {
                setStatusMessage("Thanks for getting in touch! Let's create something amazing together! 🎉");
                formElement.reset();
                setFormData({ Name: "", Email: "", Message: "" });
            } else {
                setStatusMessage("Error submitting form. Please try again.");
            }
        } catch (error) {
            setStatusMessage("An error occurred. Please try again later.");
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
            setOpen(true);
        }
    };

    const closePopup = () => {
        setOpen(false);
        setStatusMessage("");
    };

    const handleLoading = () => setIsLoading(isLoading);

    return (
        <div className="py-40 px-4 lg:px-20 lg:flex relative overflow-hidden" id="contact">
            <div className="absolute h-full overflow-hidden w-full top-0 right-0 opacity-20 z-10">
                <Image
                    src="/contact.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="bay"
                    quality={100}
                    className=""
                />
            </div>

            <div className="lg:w-2/4 relative z-30 mb-40">
                <ParallaxProvider>
                    <div className="text-7xl lg:text-9xl italic font-semibold text-[#575757] cursor-pointer flex flex-col mb-4 lg:mb-0">
                        <Parallax speed={-8}>
                            <h1>Let&apos;s<br /></h1>
                        </Parallax>
                        <Parallax speed={-4}>
                            <h1 className="ml-20">Get in</h1>
                        </Parallax>
                        <Parallax speed={0}>
                            <h1>Touch!</h1>
                        </Parallax>
                    </div>
                </ParallaxProvider>
                <p className="w-5/6 text-[#8f8f8f] italic text-sm">
                    Let&apos;s make something new, different and more meaningful or make
                    things more visual or conceptual?
                </p>

                <div className="w-3/5 mt-10">
                            <div className="flex w-3/6 text-xl mb-4">
                                <a
                                    href="https://angel.co/u/joel-kalema"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaAngellist className="mr-4" />
                                </a>
                                <a href="mailto:joelkalema63@gmail.com">
                                    <CiMail className="mr-4" />
                                </a>
                                <a
                                    href="https://github.com/joel-kalema"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiGithub className="mr-4" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/joel-kalema/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiLinkedin className="mr-4" />
                                </a>
                            </div>
                            <a href="mailto:joelkalema63@gmail.com">joelkalema63@gmail.com</a>
                        </div>
            </div>

            <div className="lg:w-2/4 relative z-30">
                <ParallaxProvider>
                    <Parallax speed={-10}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="Name"
                                id="name"
                                placeholder="FULL NAME"
                                maxLength="30"
                                required
                                value={formData.Name}
                                onChange={handleChange}
                                className="mb-4 lg:mb-16 pb-4"
                            />
                            <br />
                            <input
                                type="email"
                                name="Email"
                                id="email"
                                placeholder="EMAIL"
                                required
                                value={formData.Email}
                                onChange={handleChange}
                                className="mb-4 lg:mb-16 pb-4"
                            />
                            <br />
                            <textarea
                                id="message"
                                name="Message"
                                placeholder="MESSAGE"
                                maxLength="500"
                                required
                                value={formData.Message}
                                onChange={handleChange}
                                className="mb-6 pb-4"
                            ></textarea>
                            <br />
                            <button
                                className="mt-5 text-4xl flex items-center gap-5 float-right mb-10"
                                type="submit"
                                onClick={handleLoading}
                            >
                               Send <FaChevronRight />
                            </button>
                        </form>
                    </Parallax>
                </ParallaxProvider>
            </div>

            {isLoading && (<div className="fixed top-0 left-0 w-full h-full bg-[#10100ee6] flex items-center justify-center z-50">
                <div className="flex items-center justify-center">
                    <div class="loader"></div>
                </div>
            </div>
            )}

            {open && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#10100ee6] flex items-center justify-center z-50">
                    <div className="p-6 bg-[#10100e] rounded shadow-md text-center">
                        <div className="flex flex-col justify-center items-center">
                            <IoHappyOutline className="text-4xl" />
                            <p className="text-lg w-4/6  bg-[#10100e] my-10">{statusMessage}</p>
                            <button
                                className="border gap-4 flex items-center justify-between py-1 px-4 rounded-3xl w-3/6 lg:w-1/5 cursor-pointer"
                                onClick={closePopup}
                            >
                                Close <GrClose className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
