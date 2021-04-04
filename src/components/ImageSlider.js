import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'; 

const ImageSlider = ( { slides } ) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // Using a ternary operator to go to next image
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    // Using a ternary operator to go to previous image
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    console.log(current);

    // If there are no images in SliderData, display null.
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    // Display images by maping the image data in SliderData.js
    return (
        <section classdName="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

          {SliderData.map((slide, index) => {
              return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>

                    {index === current && (
                    <img src={slide.image} alt='travel image' className='image'/>
                    )}

                </div>
              )
          })}  

        </section>
    );
};

export default ImageSlider;
