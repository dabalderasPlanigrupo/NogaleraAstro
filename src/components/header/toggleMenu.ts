const hamburger = document.getElementById('hamburger') as HTMLButtonElement;
const menu = document.getElementById('menu') as HTMLUListElement;

hamburger.addEventListener('click', () => {
  menu.classList.toggle('translate-x-full');
});
