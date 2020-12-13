import { useState, useEffect } from 'react';

import { uploadImage } from 'firebase/client';

const DRAG_IMAGE_STATE = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
};

export default function dropIMG(props) {
  /* ====== Variables de entorno ====== */
  const [drag, setDrag] = useState(DRAG_IMAGE_STATE.NONE);
  const [task, setTask] = useState(null);
  const [bannerURL, setBannerURL] = useState(null);

  /* ====== Manejo de imagen ======= */
  const handleDragEnter = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATE.DRAG_OVER);
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATE.NONE);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files[0]);
    setDrag(DRAG_IMAGE_STATE.NONE);
    const file = event.dataTransfer.files[0];
    const task = uploadImage(file, props);
    setTask(task);
  };

  useEffect(() => {
    if (task) {
      let onProgress = () => {};
      let onError = () => {};
      let onComplete = () => {
        console.log('complete');
        task.snapshot.ref.getDownloadURL().then(setBannerURL);
        task.snapshot.ref.getDownloadURL().then(props.getBannerURL);
      };
      task.on('state_changed', onProgress, onError, onComplete);
    }
  }, [task]);

  return (
    <>
      <div
        className="banner_drop"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <style jsx>{`
        .banner_drop{
          border: ${
            drag === DRAG_IMAGE_STATE.DRAG_OVER
              ? '3px dashed #c5c213ff'
              : '3px solid rgba(230, 230, 230, .8)'
          };
          width: 265px;
          height: 140px;
          background: rgba(230, 230, 230, .8);
          background-image: ${bannerURL ? `url(${bannerURL})` : `none`};
          background-repeat: no-repeat;
          background-size: cover;
          background-size: 100% 100%;
          border-radius: 5px;
          margin 10px 0px;
          padding: 10px;
          transition: all .3s ease-out;
        }
      `}</style>
    </>
  );
}
