const euList = document.querySelector('.europe');

const euSmall = document.querySelector('.eu-small');
const euMedium = document.querySelector('.eu-medium');
const euLarge = document.querySelector('.eu-large');

const numberOfEndUsers = evt => {
  const number = evt.target.value;
  switch (number) {
    case 1:
      euList.classList.add('visually-hidden');
      euSmall.classList.remove('visually-hidden');
      break;

    case 2:
      euList.classList.add('visually-hidden');
      euSmall.classList.remove('visually-hidden');
      euMedium.classList.remove('visually-hidden');
      break;

    case 3:
      euList.classList.add('visually-hidden');
      euSmall.classList.remove('visually-hidden');
      euMedium.classList.remove('visually-hidden');
      euLarge.classList.remove('visually-hidden');
      break;

    default:
      break;
  }
};

euList.addEventListener('click', numberOfEndUsers);
