const auList = document.querySelector('.australia');

const auSmall = document.querySelector('.au-small');
const auMedium = document.querySelector('.au-medium');
const auLarge = document.querySelector('.au-large');

const numberOfEndUsers = evt => {
  const number = evt.target.value;
  switch (number) {
    case 1:
      auList.classList.add('visually-hidden');
      auSmall.classList.remove('visually-hidden');
      break;

    case 2:
      auList.classList.add('visually-hidden');
      auSmall.classList.remove('visually-hidden');
      auMedium.classList.remove('visually-hidden');
      break;

    case 3:
      auList.classList.add('visually-hidden');
      auSmall.classList.remove('visually-hidden');
      auMedium.classList.remove('visually-hidden');
      auLarge.classList.remove('visually-hidden');
      break;

    default:
      break;
  }
};

auList.addEventListener('click', numberOfEndUsers);
