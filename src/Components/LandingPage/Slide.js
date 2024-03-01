import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../Assets/5.jpg"
import img2 from "../Assets/bfast.jpg"
import img3 from "../Assets/cinnamon-roll.jpg"
import img4 from "../Assets/chocolate-cream.jpg"

const DemoCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt='slide1' />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img2} alt='slide2' />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img3} alt='slide3' />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={img4} alt='slide4' />
                <p className="legend">Legend 4</p>
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
