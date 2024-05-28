import React, { useState } from 'react';
import './styles.css';

interface Props {
    images: string[];
}


const Accordion: React.FC<Props> = ({ images }) => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };


    return (
        <div className="accordion" id="galeria">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ backgroundImage: `url(${image})` }}
                >

                </div>
            ))}
        </div>
    );
};

export default Accordion;