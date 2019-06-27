function clearColumns(columns) {
  columns.forEach( elem => {
    while (elem.firstChild) elem.removeChild(elem.firstChild);
  })
}

export default clearColumns;