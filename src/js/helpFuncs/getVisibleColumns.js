function getVisibleColumns() {
  
  let columnsArray = [];
  let columns = document.querySelectorAll('.content_column');
  
  columns.forEach( column => {
    if (column.offsetParent != null) columnsArray.push(column);
  });
  
  return columnsArray;
}

export default getVisibleColumns;

