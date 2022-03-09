import React from 'react';
import { Slide } from 'react-slideshow-image';
//css
import '../css/index.css';
import 'react-slideshow-image/dist/styles.css'
//pages

const slideImages = [
    {
        url: require('../images/slideshow/img_08.jpg'),
        caption: ' Slide 1'
    },
    {
        url: require('../images/slideshow/img_02.jpg'),
        caption: ' Slide 2'
    },
    {
        url: require('../images/slideshow/img_03.jpg'),
        caption: ' Slide 3'
    },
    {
        url: require('../images/slideshow/img_04.jpg'),
        caption: ' Slide 4'
    },
    {
        url: require('../images/slideshow/img_05.jpg'),
        caption: ' Slide 5'
    },
    {
        url: require('../images/slideshow/img_06.jpg'),
        caption: ' Slide 6'
    },
    {
        url: require('../images/slideshow/img_07.jpg'),
        caption: ' Slide 7'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide autoplay={false} easing="ease">
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default Slideshow;