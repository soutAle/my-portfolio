import React from "react";
import { HeroSection } from "../components/home_components/HeroSection.jsx";

export const Home = () => {
    return (
        <div className="h-screen flex flex-col items-center my-10 px-6">
            <HeroSection
                title="Bienvenido a mi portafolio"
                name="Alejandro"
                subtitle="Desarrollador Full Stack"
                description="Soy un apasionado de la tecnología con experiencia en desarrollo frontend y backend."
                links={[
                    {
                        to: '/projects',
                        text: 'Ver Proyectos',
                        className: 'bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition'
                    },
                    {
                        to: '/about',
                        text: 'Sobre mi',
                        className: 'border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-500 px-6 py-3 rounded-lg transition'
                    }
                ]}
            />
        </div>
    );
};

