import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="py-6 z-[999] bottom-0 left-0 right-0 bg-black/50 backdrop-blur">
            <div className="container mx-auto px-4 text-center">
                <ul className="flex justify-center space-x-6 mb-4">
                    <li>
                        <Link to="/" className="hover:text-gray-300 transition duration-200">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-300 transition duration-200">
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300 transition duration-200">
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="hover:text-gray-300 transition duration-200">
                            Proyectos
                        </Link>
                    </li>
                </ul>
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Mi Web. Todos los derechos
                    reservados.
                </p>
            </div>
        </footer>
    );
};