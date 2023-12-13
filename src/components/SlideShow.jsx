import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import slider1 from "../images/slide1.jpg";
import slider2 from "../images/slide2.jpg";
import slider3 from "../images/slide3.jpg";
import './slideshow.scss';

export default function SlideShow() {
  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="currentColor"
      className="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );

  const leftArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="currentColor"
      className="bi bi-chevron-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );

  const datas = [
    { image: slider1, id: 1 },
    { image: slider2, id: 2 },
    { image: slider3, id: 3 },
  ];

  const items = datas.map((item) => (
    <img src={item.image} alt="item" key={item.id} />
  ));

  const responsive = {
    0: { items: 1 },
    469: { items: 1 },
    580: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div className="slideshow-container">
      <AliceCarousel
          mouseTracking
          disableButtonsControls
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          infinite
          autoPlay={true}
          autoPlayInterval={2000}
        />
    </div>
  );
}
