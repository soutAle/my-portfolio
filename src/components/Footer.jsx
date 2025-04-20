import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="w-full py-6 z-[999] bottom-0 left-0 right-0 bg-black/50 backdrop-blur">
            <div className=" px-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold text-teal-400">Alejandro Valencia Giraldo</h1>
                        <p className="text-gray-400 text-sm mt-1">
                            © {new Date().getFullYear()}
                        </p>
                    </div>
                    <ul className="flex flex-col md:flex-row gap-4 text-center">
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
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                    Diseñado con React y Tailwind CSS
                </div>
            </div>
        </footer>
    );
};
