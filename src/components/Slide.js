import React from 'react';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Slide.css';
import Slider from 'react-slick';
import SlideContent from './SlideContent';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const Slide = ({ allData }) => {
  return (
    <>
      <Slider {...settings} className="slide__wrapper">
        {allData.map((item) => (
          <SlideContent key={item.id} playList={item} />
        ))}
      </Slider>
    </>
  );
};

function mapStateToProps(store) {
  return {
    allData: store.musicData,
  };
}

export default connect(mapStateToProps)(Slide);
