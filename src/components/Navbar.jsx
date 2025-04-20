import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlinePython } from "react-icons/ai";
import { SiFlask } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

export const Navbar = () => {
    return (
        <nav className="w-full pt-6 z-[999] top-0 left-0 right-0 bg-black/50 backdrop-blur text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end py-4">
                    <div className="mb-4 md:mb-0 text-center">
                        <h1 className="text-2xl font-bold text-teal-400">
                            Alejandro Valencia Giraldo
                        </h1>
                        <div className="flex flex-col md:flex-row items-center mt-1 gap-2 md:gap-7 text-gray-400 text-sm mt-1">
                            <p className="">
                                Desarrollador web full stack
                            </p>
                            <div className="flex text-base gap-1">
                                <FaReact />
                                <IoLogoJavascript />
                                <AiOutlinePython />
                                <SiFlask />
                                <SiPostgresql />
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-row gap-4 text-start items-center text-sm md:text-base">
                        <li>
                            <Link to="/" className="hover:text-teal-400 transition">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-teal-400 transition">
                                Acerca de
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="hover:text-teal-400 transition">
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-teal-400 transition">
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-teal-400 transition">
                                Sobre mí
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
