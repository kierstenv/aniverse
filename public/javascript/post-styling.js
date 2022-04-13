const mainEl = document.querySelector('main');
const postEl = document.querySelector('div.title');

if (window.location.pathname.includes('/post/')) {
  postEl.classList.add('comment-page');
  if (screen.orientation.angle === 00 && screen.width >= 1024) {
    mainEl.classList.add('column-view');
  }
  
  screen.orientation.addEventListener('change', (e) => {
    mainEl.classList.toggle('column-view');
  });
} else {
  postEl.classList.remove('comment-page');
}