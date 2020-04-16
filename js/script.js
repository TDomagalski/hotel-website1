// ~~~~~~ Menu ~~~~~~~

// dropdown menu
const dropdownBtn = document.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', () => {
  dropdownBtn.classList.toggle('active-dropdown');
}, false)


// hamburger animation
const
  item = document.querySelector('.item'),
  navigation = document.querySelector('.nav-menu');


item.addEventListener('click', () => {
  item.classList.toggle('active');
  navigation.classList.toggle('active');
}, false);