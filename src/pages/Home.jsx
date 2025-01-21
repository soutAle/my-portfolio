import React from "react";
import { HeroSection } from "../components/home_components/HeroSection.jsx";

export const Home = () => {
    return (
        <div className="h-screen flex flex-col items-center my-10 px-6">
            <HeroSection />
        </div>
    );
};

