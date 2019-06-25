import createAlert from './createAlert';

function setGifListeners(elem, pauseGif, playGif, storageArray, local) {
  let timeout;
  elem.addEventListener('mouseenter', () => elem.src = playGif);
  elem.addEventListener('mouseleave', () => elem.src = pauseGif);
  elem.addEventListener('mousedown', () => {
    timeout = setTimeout(() => {
      if (local) {
        storageArray.slice(storageArray.indexOf(elem), 1);
        localStorage.setItem('fav', JSON.stringify(storageArray));
        elem.remove();
        createAlert({
          type: 'error',
          message: 'GIF DELETED',
          timeToEnd: 2000
        });
      }
      else {
        storageArray.unshift({
          elem: elem,
          pause: pauseGif,
          play: playGif
        });
        localStorage.setItem('fav', JSON.stringify(storageArray));
        createAlert({
          type: 'success',
          message: 'GIF ADDED',
          timeToEnd: 2000
        });
      }
    }, 1000);
  })

  elem.addEventListener('mouseup', () => {
    clearTimeout(timeout);
  } )

 
}

export default setGifListeners;