import React from 'react';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src={slide1}/>
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={slide2} />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={slide3}/>
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={slide4}/>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;