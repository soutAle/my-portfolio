import React from "react";
import { HeroSection } from "../components/home_components/HeroSection.jsx";

export const Home = () => {
    return (
        <div className="h-screen flex flex-col items-center my-10 px-6">
            <HeroSection
                title="Bienvenido a mi portafolio"
                name=" soy Alejandro"
                subtitle="Desarrollador Full Stack"
                description="Soy un apasionado de la tecnología con experiencia en desarrollo frontend y backend."
                links={[
                    {
                        to: '/projects',
                        text: 'Ver Proyectos',
                    },
                    {
                        to: '/about',
                        text: 'Sobre mi',
                    }
                ]}
            />
        </div>
    );
};

