import React, { useState, useEffect, memo } from 'react';
import cn from 'classnames';
import img640 from '@Assets/alexander-andrews-mEdKuPYJe1I-640.jpg';
import img960 from '@Assets/ray-hennessy-xUUZcpQlqpM-960.jpg';
import img1280 from '@Assets/erik-mclean-OVWn1sbGIYQ-1280.jpg';
import img1920 from '@Assets/qijin-xu-fJyO0eo6_1920.jpg';
import scopedStyle from './index.module.css';

function App(): React.ReactElement {
  /* States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  /* Functions */
  const getCurrentViewWidth = (): void => {
    setWidth(window.innerWidth);
  };

  /* Hooks */
  useEffect(() => {
    window.addEventListener('resize', getCurrentViewWidth);
  }, []);

  /* Main */
  return (
    <div className={cn(scopedStyle.main)}>
      <img
        className={cn(scopedStyle.img)}
        /* srcSet={`${img640} 640w, ${img960} 960w, ${img1280} 1280w`} */
        srcSet={`${img640} 1x, ${img960} 2x, ${img1280} 3x`}
        src={img1920}
        alt="fox"
      />
      <div>current window width: {width}</div>
    </div>
  );
}

export default memo(App);
