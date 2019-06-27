import getVisibleColumns from './helpFuncs/getVisibleColumns';
import loadGifs from './helpFuncs/loadGifs';


let inputs = document.querySelectorAll('.header_input_search');
let buttonsTrends = document.querySelectorAll('.header_button_trends');
let buttonsSearch = document.querySelectorAll('.header_button_search');
let buttonsFavorites = document.querySelectorAll('.header_button_favorites');

loadGifs( {
  columns: getVisibleColumns(),
  type: 'trends',
  phrase: inputs[0].value,
  limit: 15,
  offset: 0,
  autoplay: false,
  local: false
}, true )

buttonsTrends.forEach(button => {
  button.addEventListener('click', () => {
    loadGifs( {
      columns: getVisibleColumns(),
      type: 'trends',
      limit: 15,
      offset: 0,
      autoplay: false,
      local: false
    }, true )
  })
})

buttonsSearch.forEach(button => {
  button.addEventListener('click', () => {
    window.stop();
    loadGifs( {
      columns: getVisibleColumns(),
      type: 'q',
      phrase: inputs[0].value,
      limit: 15,
      offset: 0,
      autoplay: false,
      local: false
    }, true )
  })
})

buttonsFavorites.forEach(button => {
  button.addEventListener('click', () => {
    window.stop();
    loadGifs( {
      columns: getVisibleColumns(),
      autoplay: false,
      local: true
    }, true )
  })
})


