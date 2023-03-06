const naList = document.querySelector('.north-america');

const naSmall = document.querySelector('.na-small');
const naMedium = document.querySelector('.na-medium');
const naLarge = document.querySelector('.na-large');

const numberOfEndUsers = evt => {
  const number = evt.target.value;
  switch (number) {
    case 1:
      naList.classList.add('visually-hidden');
      naSmall.classList.remove('visually-hidden');
      break;

    case 2:
      naList.classList.add('visually-hidden');
      naSmall.classList.remove('visually-hidden');
      naMedium.classList.remove('visually-hidden');
      break;

    case 3:
      naList.classList.add('visually-hidden');
      naSmall.classList.remove('visually-hidden');
      naMedium.classList.remove('visually-hidden');
      naLarge.classList.remove('visually-hidden');
      break;

    default:
      break;
  }
};

naList.addEventListener('click', numberOfEndUsers);
