import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../Assets/5.jpg"
import img2 from "../Assets/bfast.jpg"
import img3 from "../Assets/cinnamon-roll.jpg"
import img4 from "../Assets/chocolate-cream.jpg"
import styled from 'styled-components';

class DemoCarousel extends Component {
    // const Slide = () => { 
        render() {
        return (
            <Carousel>
                <Div >
                    <Img  src={img1} alt='slide1' />
                    <p className="legend">Legend 1</p>
                </Div>
                <Div>
                    <Img src={img2} alt='slide2' />
                    <p className="legend">Legend 2</p>
                </Div>
                <Div>
                    <Img src={img3} alt='slide3' />
                    <p className="legend">Legend 3</p>
                </Div>
                <Div>
                    <Img src={img4} alt='slide4' />
                    <p className="legend">Legend 4</p>
                </Div>
            </Carousel>
        );
    }
};
    // export default Slide;
export default ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
// export default DemoCarousel;

const Div = styled.div``;
const Img = styled.img``;