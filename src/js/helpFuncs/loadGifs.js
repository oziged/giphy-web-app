import getVisibleColumns from "./getVisibleColumns";
import clearColumns from './clearColumns';
import startXML from './startXML';

let storageArray = JSON.parse(localStorage.getItem('fav')) || [];

function loadGifs (options, clear, local) {
  local = options.local;
  if (clear) clearColumns(options.columns);
    let link = buildLink();
    if (options.local) {
      startXML(options, '', storageArray, true);
    }
    else {
      startXML(options, link, storageArray);
    }

  function buildLink() {
    if (options.type == 'trends') 
    return 'https://api.giphy.com/v1/gifs/trending?api_key=wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb&limit='+options.limit+'&offset='+options.offset;
    if (options.type == 'q')
    return 'https://api.giphy.com/v1/gifs/search?api_key=wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb&q='+options.phrase+'&limit='+options.limit+'&offset='+options.offset;
  }


  function onscrollFunc() {
    let visibleHeight = document.documentElement.clientHeight;
    let scrolledHeight = window.pageYOffset;
    let wholeHeight = document.body.clientHeight;
    console.log(local);
    if (visibleHeight + scrolledHeight > wholeHeight - 50) 
      {
        if (!local) {
          options.offset += options.limit;
          loadGifs(options);
          document.onscroll = '';
          setTimeout(() => {
            document.onscroll = onscrollFunc;
          }, 100);
        }
      };
  }
  document.onscroll = onscrollFunc;

  let timer;
window.onresize = () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
            window.scrollTo(0,0);
            setTimeout(() => {
              options.offset = 0;
              options.columns = getVisibleColumns();
              loadGifs(options, true);
            }, 0);
  }, 1000);
}
  }

export default loadGifs;
