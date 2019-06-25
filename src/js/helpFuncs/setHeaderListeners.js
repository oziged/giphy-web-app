let headerActive = document.querySelector('.header_active');
let headerScroll = document.querySelector('.header_scroll');
let headerActiveInput = headerActive.querySelector('input');
let headerScrollInput = headerScroll.querySelector('input');

document.addEventListener('scroll', e => {

  if (window.pageYOffset > headerActive.clientHeight+50) {
    headerScroll.style.display = 'flex';
    setTimeout(() => {      
      headerScroll.style.top = 0;      
    }, 0);
  }
  if (!window.pageYOffset) {
    headerScroll.style.display = 'none';
    headerScroll.style.top = '-100px';
  }
})

headerActiveInput.oninput = () => headerScrollInput.value = headerActiveInput.value;
