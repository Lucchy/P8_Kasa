import React, { useState } from "react";
import arrowLeft from '../assets/arrowleft.png';
import arrowRight from '../assets/arrowright.png';

function Slider ({pictures}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const goLeft = () => {
        setActiveIndex(previous => previous === 0 ? pictures.length - 1 : previous - 1); 

    }; 

    const goRight = () => {
        setActiveIndex(next => next === pictures.length - 1 ? 0 : activeIndex + 1);
    };

    const imageCounter = `${activeIndex + 1}/${pictures.length}`;

    return (
        <div className="slider">
            <img src={arrowLeft} alt="left_arrow" className="arrow-left" onClick={goLeft}/>
            <img src={pictures[activeIndex]} alt="Image Slider logement" className="slide-img"/>
            <img src={arrowRight} alt="left_arrow" className="arrow-right" onClick={goRight}/>
            <div className="counter">{imageCounter}</div>
        </div>
    )
}

export default Slider;