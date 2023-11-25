
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src="image/dargavs.jpg" alt="Slide 1" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" alt="Slide 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" alt="Slide 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
