import getVisibleColumns from './helpFuncs/getVisibleColumns';
import loadGifs from './helpFuncs/loadGifs';

let columns = getVisibleColumns();

let inputs = document.querySelectorAll('.header_input_search');
let buttonsTrends = document.querySelectorAll('.header_button_trends');
let buttonsSearch = document.querySelectorAll('.header_button_search');
let buttonsFavorites = document.querySelectorAll('.header_button_favorites');

buttonsTrends.forEach(button => {
  button.addEventListener('click', () => {
    loadGifs( {
      columns: columns,
      type: 'trends',
      limit: 10,
      offset: 0,
      autoplay: false,
      local: false
    }, true )
  })
})
buttonsSearch.forEach(button => {
  button.addEventListener('click', () => {
    loadGifs( {
      columns: columns,
      type: 'q',
      phrase: inputs[0].value,
      limit: 10,
      offset: 0,
      autoplay: false,
      local: false
    }, true )
  })
})

buttonsFavorites.forEach(button => {
  button.addEventListener('click', () => {
    loadGifs( {
      columns: columns,
      autoplay: false,
      local: true
    }, true )
  })
})

// buttons[1].onclick = () => loadGifs( {
//   columns: columns,
//   type: '',
//   phrase: input.value,
//   limit: 10,
//   offset: 0,
//   autoplay: false,
//   local: true
// }, true )

// buttons[0].onclick = () => loadGifs( {
//   columns: columns,
//   type: 'trends',
//   phrase: input.value,
//   limit: 10,
//   offset: 0,
//   autoplay: false,
//   clear: true,
//   local: false
// }, true )


loadGifs( {
  columns: columns,
  type: 'trends',
  phrase: inputs[0].value,
  limit: 10,
  offset: 0,
  autoplay: false,
  local: false
}, true )

