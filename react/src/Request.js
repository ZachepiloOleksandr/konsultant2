import React, { useState } from 'react';

const Urist = (props) => {
    const [title, setTitle] = useState('');
    const [massiv, setMassiv] = useState([]);

    const onStart = () => {
      try {
        window.sfsdf();
      } catch (e) {
        console.log(e);
      }
      // fetch("http://httpbin.org/status/2", {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: {
      //     asdasd: { pop: 32423 } 
      //   }
      // }).then(asd => {
      //   console.log();
      // }).catch((err) => {
      //   // console.log(err);
      //   setTitle("Error");
      // });
    }

  return (
    <div class="swiper-slide" id="client">
        {title} :
        <br />
        { massiv.map((item, index) => <div key={item}>{index}) {item}</div>) }
        <br />
      <button onClick={onStart}>
          Send Request
      </button>
        
    </div>
  );
}

export default React.memo(Urist);
