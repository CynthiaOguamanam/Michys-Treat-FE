import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../Assets/bfast.jpg"
import img2 from "../Assets/bfast.jpg"
import img3 from "../Assets/cinnamon-roll.jpg"
import img4 from "../Assets/chocolate-cream.jpg"


const DemoCarousel = () => {

    const carouselContainerStyle  = {
        height: "20vh", // Adjusted height
        maxHeight: "150px", // Limit maximum height if necessary
        width: "100%",
    };

    return (
        <div style={carouselContainerStyle }>
            <Carousel >
                <div>
                    <img style={{height: "80%"}}  src={img1} alt='slide1' />
                    <p className='legend'>Legend 1</p>
                </div>
                <div>
                    <img style={{height: "80%"}} src={img2} alt='slide2' />
                    <p className='legend'>Legend 2</p>
                </div>
                <div>
                    <img style={{height: "80%"}} src={img3} alt='slide3' />
                    <p className='legend'>Legend 3</p>
                </div>
                <div>
                    <img style={{height: "80%"}} src={img4} alt='slide4' />
                    <p className='legend'>Legend 4</p>
                </div>
            </Carousel>
        </div>
      
    );
};

export default DemoCarousel;
