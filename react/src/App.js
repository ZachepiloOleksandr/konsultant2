import { useState } from 'react';
import { Carousel } from 'antd';

import Helper from './Helper';
import Calc from './Calc';
import Request from './Request';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const vplivashkaState = useState(false);

  console.log('---- APP');
  return (
    
    <div className="App">
      <Carousel
        className="carousel"
        style={{ width:'100vw'}}
        dots={false}
      >
        <Helper vplivashkaState={vplivashkaState} />
        <Calc />
      </Carousel>
      {/* <Request /> */}
    </div>
  );
}

export default App;
