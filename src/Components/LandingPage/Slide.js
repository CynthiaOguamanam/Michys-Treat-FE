import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../Assets/pasta44.jpg"
import img2 from "../Assets/birthdaycake.jpg"
// import img2 from "../Assets/bfast.jpg"
import img3 from "../Assets/pizza.jpg"
import img4 from "../Assets/cake33.jpg"
import img5 from "../Assets/birthdaycake.jpg"
import img6 from "../Assets/pancakes.jpg"
import img7 from "../Assets/rice-shrimp.jpg"
import "./style.css"

const DemoCarousel = () => {

    // const carouselContainerStyle  = {
    //     height: "20vh", // Adjusted height
    //     maxHeight: "150px", // Limit maximum height if necessary
    //     width: "100%",
    // };

    return (
        <div className="carousel-container">
            <Carousel showArrows={true}>
                <div className='carousel-divcontainer'>
                    <img  src={img1} alt='slide1' />
                    <p className='legend'>Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt='slide2' />
                    <p className='legend'>Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt='slide3' />
                    <p className='legend'>Legend 3</p>
                </div>
                <div>
                    <img src={img4} alt='slide4' />
                    <p className='legend'>Legend 4</p>
                </div>
                <div>
                    <img src={img5} alt='slide4' />
                    <p className='legend'>Legend 4</p>
                </div>
                <div>
                    <img src={img6} alt='slide4' />
                    <p className='legend'>Legend 4</p>
                </div>
                <div>
                    <img src={img7} alt='slide4' />
                    <p className='legend'>Legend 4</p>
                </div>
            </Carousel>
        </div>
      
    );
};

export default DemoCarousel;
