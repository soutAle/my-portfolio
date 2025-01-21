import React from "react";
import { Link } from "react-router-dom";


export const HeroSection = () => {
    return (
        <section className="h-screen flex flex-col items-center my-10 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                ¡Hola, soy <span className="text-teal-400">Alejandro</span>!
            </h1>
            <h2 className="text-xl md:text-2xl text-center mb-6">
                Desarrollador Full Stack | Construyendo soluciones web modernas
            </h2>
            <p className="text-center max-w-2xl text-gray-300 mb-8">
                Soy un apasionado de la tecnología con experiencia en desarrollo frontend y backend. Mi objetivo es crear aplicaciones funcionales, intuitivas y visualmente atractivas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <Link to={'/projects'}
                    href="#projects"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition"
                >
                    Ver Proyectos
                </Link>
                <Link to={'/about'}
                    href="#contact"
                    className="border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-500 px-6 py-3 rounded-lg transition"
                >
                    Sobre mi
                </Link>
            </div>
            <div className="mt-10">
                <img
                    src="/path/to/your/image.png"
                    alt="Representación de desarrollo web"
                    className="w-72 md:w-96 mx-auto"
                />
            </div>
        </section>
    )
}