import addGifs from './addGifs';
import setGifListeners from './setGifListeners';
import getVisibleColumns from './getVisibleColumns';

function startXML(options, link, storageArray, local) {
  options.columns = getVisibleColumns();
    if (!local) {
      let xhr = new XMLHttpRequest;
      xhr.open('GET', link, true);
      xhr.send();
      xhr.onerror = () => setTimeout(() => {
        loadGifs(options);
      }, 200);
      xhr.onload = () => {
        let response = JSON.parse(xhr.responseText);
        response['data'].forEach(elem => setIMG(elem, false));
      }
    }
    else {
      storageArray.forEach(elem => setIMG(elem, true));
    }
  
  
    function setIMG(elem, local) {
      let img = document.createElement('img');
      let pauseGif, playGif;
      if (local) {
        pauseGif = elem.pause;    
        playGif = elem.play;
      }
      else {
        pauseGif = elem['images']['480w_still']['url'];
        playGif = elem['images']['downsized']['url'];
      }
      if (!options.autoplay) img.src = pauseGif;
      else img.src = playGif;
      img.style.width = '100%';
      img.firstLoaded = false;
      img.onload = () => {
        if (!img.firstLoaded) {
          addGifs(img, options);
          setGifListeners(img, pauseGif, playGif, storageArray, local);
        }
        img.firstLoaded = true;
      }
    }
  }



export default startXML;

