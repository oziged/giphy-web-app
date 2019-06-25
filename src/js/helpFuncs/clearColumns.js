function clearColumns(columns) {
  columns.forEach( elem => {
    while (elem.firstChild) elem.removeChild(elem.firstChild);
  })
  window.scrollTo(0,0);
}

export default clearColumns;