import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Carousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselSection({ slides }) {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p className='carousel_para'>{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
      <button className="carousel-button prev" onClick={() => sliderRef.current.slickPrev()}>
        Back
      </button>
      <button className="carousel-button next" onClick={() => sliderRef.current.slickNext()}>
        Next
      </button>
    </div>
  )
}

export default CarouselSection