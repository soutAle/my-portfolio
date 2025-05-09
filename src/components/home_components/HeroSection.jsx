import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = ({ title, name, subtitle, description, links }) => {
    return (
        <section className="flex flex-col md:flex-row items-center mt-10 p-6">
            <div className="image-container">
                <img
                    src="https://media.licdn.com/dms/image/v2/C4E12AQGHV0NPyBVy9Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1566116118391?e=2147483647&v=beta&t=ZvV8ahuBDMeQYzIkiXrb1V2qEQuvy8X9msQkYvOXHRU"
                    alt="hero image"
                    className="rounded-lg shadow-lg object-cover mr-10"
                    style={{ filter: "grayscale(50%)" }}
                />
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl md:text-6xl font-bold text-center my-10">
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
            </div>
        </section>
    );
}