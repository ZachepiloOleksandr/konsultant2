import { useState, useRef, useEffect } from 'react';
import { Carousel } from 'antd';

import Helper from './Helper';
import Calc from './Calc';
import Request from './Request';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [refd, setRefd] = useState(null);

  console.log('---- APP');

  return (
    
    <div className="App">
      <Carousel
        ref={(a) => {
          if (!window.CarouselInited) {
            setRefd(a);
            window.CarouselInited = true;
          }
        }}
        className="carousel"
        style={{ width:'100vw'}}
        dots={false}
      >
        <Helper />
        <Calc />
      </Carousel>

      <button className="carusel_prev" onClick={refd?.prev}>	&#60; </button>
      <button className="carusel_next" onClick={refd?.next}>	&#62; </button>
      {/* <Request /> */}
    </div>
  );
}

export default App;
