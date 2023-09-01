import React from 'react';
import Slider from 'react-slick';
import bgimg1 from '../assests/dazzle-images/banner-slider.png'
import bgimg2 from '../assests/dazzle-images/banner-2.png'
const HeaderBanner = () => {
    const sliderRef = React.useRef();

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        ref: sliderRef,
    };
  return (
    <>
      <main className="main-wrapper">
      <div className="axil-main-slider-area main-slider-style-4" >
            <div className="column-full">
            <div className="slider-box-wrap">
                    <Slider {...settings} className="slider-activation-two axil-slick-dots">
                    <div className="slider-item">
                    <img src={bgimg1} alt="Slide 1" />
                </div>
                <div className="slider-item">
                    <img src={bgimg2} alt="Slide 1" />
                </div>
               
                    </Slider>
                    <div className="custom-arrows">
                <button className="prev-button" onClick={handlePrev}>
                    01
                </button>
                <button className="next-button" onClick={handleNext}>
                    02
                </button>
            </div>
                </div>
            </div>
        </div>
     </main>
    </>
  );
};

export default HeaderBanner;