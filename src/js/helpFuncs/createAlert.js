let activeAlert = 0;
function createAlert(options) {
  console.log(activeAlert);
  if (!activeAlert) {
    activeAlert++;
    let div = document.createElement('div');
    div.classList.add(options.type);
    div.textContent = options.message;
    document.body.append(div);
    div.style.display = 'block';
    setTimeout(() => {
      div.style.opacity = 1;
    }, 200);
    setTimeout(() => {
      div.style.opacity = 0;
      setTimeout(() => {
        div.remove();
        activeAlert--;
      }, 1000);
    }, 2000);
  }
}

export default createAlert;