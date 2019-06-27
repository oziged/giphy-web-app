  function addGifs(img, options) {
  let minIndex = 0;
  let columnsHeight = options.columns.map( column => {
    return column.offsetHeight;
  });

  for (let i = 0; i < columnsHeight.length; i++) {
    if (columnsHeight[minIndex] > columnsHeight[i]) {
      minIndex = i;
    }
  }
  options.columns[minIndex].append(img);
  img.style.height = img.clientHeight + 'px';
}

export default addGifs;