import React from "react";

export const ImageGrid = ({ images, columns }) => {

    const getGridColumnsClass = (columns) => {
        switch (columns) {
            case 1: return "grid-cols-1";
            case 2: return "grid-cols-2";
            case 3: return "grid-cols-3";
            case 4: return "grid-cols-4";
            default: return "grid-cols-1";
        }
    }

    return (
        <div className={`grid mt-10 gap-4 ${getGridColumnsClass(columns)}`}>
            {images.map((image, index) => (
                <div key={index} className="bg-gray-200 rounded-md">
                    <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    )
}