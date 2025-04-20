import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = ({ title, name, subtitle, description, links }) => {
    return (
        <section className="flex flex-col items-center mt-10 p-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center my-10">
                {title} <span className="text-teal-400">{name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-center mb-6">
                {subtitle}
            </h2>
            <p className="text-center max-w-2xl text-gray-300 mb-8">
                {description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                {links && links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.to}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition"
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </section>
    );
}