import { useState } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  let imgArr = [
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  ];

  let [imgIdx, setImgIdx] = useState(0);

  let prev = () => {
    setImgIdx(Math.max(0, imgIdx - 1));
  };

  let next = () => {
    setImgIdx(Math.min(imgArr.length - 1, imgIdx + 1));
  };

  let first = imgIdx == 0;
  let last = imgIdx == imgArr.length - 1;

  return (
    <div className="bgDiv">
      <ImageSlider
        src={imgArr[imgIdx]}
        prev={prev}
        next={next}
        first={first}
        last={last}
      />
    </div>
  );
}

export default App;
