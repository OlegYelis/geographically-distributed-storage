const asList = document.querySelector('.asia');

const asSmall = document.querySelector('.as-small');
const asMedium = document.querySelector('.as-medium');
const asLarge = document.querySelector('.as-large');

const numberOfEndUsers = evt => {
  const number = evt.target.value;
  switch (number) {
    case 1:
      asList.classList.add('visually-hidden');
      asSmall.classList.remove('visually-hidden');
      break;

    case 2:
      asList.classList.add('visually-hidden');
      asSmall.classList.remove('visually-hidden');
      asMedium.classList.remove('visually-hidden');
      break;

    case 3:
      asList.classList.add('visually-hidden');
      asSmall.classList.remove('visually-hidden');
      asMedium.classList.remove('visually-hidden');
      asLarge.classList.remove('visually-hidden');
      break;

    default:
      break;
  }
};

asList.addEventListener('click', numberOfEndUsers);
