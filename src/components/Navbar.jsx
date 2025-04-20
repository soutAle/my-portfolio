import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="py-3 bg-black/50 backdrop-blur">
            <div className="container mx-auto align-center px-4">
                <div className="flex justify-between items-end py-4">
                    <div className="text-2xl font-bold mx-2">
                        <Link to="/" className="hover:text-gray-300">
                            Alejandro Valencia Giraldo
                        </Link>
                    </div>
                    <ul className="flex space-x-10 ms-10">
                        <li>
                            <Link to="/" className="hover:text-gray-300 transition duration-200">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-300 transition duration-200">
                                sobre mi
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="hover:text-gray-300 transition duration-200">
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-gray-300 transition duration-200">
                                Proyectos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};