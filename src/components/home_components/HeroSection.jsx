import React from "react";
import { Link } from "react-router-dom";
import { ImageGrid } from "../ImageGrid.jsx";

export const HeroSection = ({ title, name, subtitle, description, links }) => {
    return (
        <section className="h-screen flex flex-col items-center my-10 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
                {title}! <span className="text-teal-400">{name}</span>
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
            <ImageGrid
                images={[
                    { url: 'https://winatalent.com/blog/wp-content/uploads/2023/12/Best-Programming-Software-for-Writing-Code.jpg', alt: 'Picture 1', figcaption: 'Caption for image 1' },
                    { url: 'https://winatalent.com/blog/wp-content/uploads/2023/12/Best-Programming-Software-for-Writing-Code.jpg', alt: 'Picture 2', figcaption: 'Caption for image 2' },
                    { url: 'https://winatalent.com/blog/wp-content/uploads/2023/12/Best-Programming-Software-for-Writing-Code.jpg', alt: 'Picture 3', figcaption: 'Caption for image 3' },
                ]}
                columns={3}

            />
        </section>
    );
}