import React from "react";
import { getGridColumnsClass } from "../utils/getGridColumns";

export const ImageGrid = ({ images, columns, figcaption }) => {

    return (
        <div className={`grid mt-10 gap-4 ${getGridColumnsClass(columns)}`}>
            {images.map((image, index) => (
                <figure key={index}>
                    <img
                        src={image.url}
                        alt={image.alt}
                        className="w-80 m-10 rounded-xl h-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-400 mt-10">{image.figcaption}</figcaption>
                </figure>
            ))}
        </div>
    )
}