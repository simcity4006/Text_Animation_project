const text = document.querySelector('.second_text');

const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Freelancer';
  }, 0);
  setTimeout(() => {
    text.textContent = 'Blogger';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'Developer';
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);
