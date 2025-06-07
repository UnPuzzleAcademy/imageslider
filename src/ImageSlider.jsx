import { useEffect, useRef } from 'react';
import './ImageSlider.css';

let ImageSlider = ({ src, prev, next, first, last }) => {
  let imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.style.scale = 1.05;
    setTimeout(() => {
      imgRef.current.style.scale = 1;
    }, 200);
  }, [src]);
  return (
    <>
      <div className="imgDiv" ref={imgRef}>
        <img src={src} />
      </div>
      <div className="btnDiv">
        <button onClick={prev} disabled={first}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button onClick={next} disabled={last}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
