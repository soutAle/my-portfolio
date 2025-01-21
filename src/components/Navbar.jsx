import React from 'react'
import '../styles/navbar.css'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold">
                        <Link to="/" className="hover:text-gray-300">
                            icono
                        </Link>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-gray-300 transition duration-200"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-gray-300 transition duration-200"
                            >
                                sobre mi
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/home"
                                className="hover:text-gray-300 transition duration-200"
                            >
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className="hover:text-gray-300 transition duration-200"
                            >
                                Proyectos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};