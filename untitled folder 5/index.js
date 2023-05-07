let baloon = document.querySelector(".baloon")


baloon.addEventListener('click', () => {
  baloon.classList.add('active');
  setTimeout(() => {
    baloon.classList.remove('active');
  }, 10000);
});