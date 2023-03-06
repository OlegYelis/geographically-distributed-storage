const saList = document.querySelector('.south-america');

const saSmall = document.querySelector('.sa-small');
const saMedium = document.querySelector('.sa-medium');
const saLarge = document.querySelector('.sa-large');

const numberOfEndUsers = evt => {
  const number = evt.target.value;
  switch (number) {
    case 1:
      saList.classList.add('visually-hidden');
      saSmall.classList.remove('visually-hidden');
      break;

    case 2:
      saList.classList.add('visually-hidden');
      saSmall.classList.remove('visually-hidden');
      saMedium.classList.remove('visually-hidden');
      break;

    case 3:
      saList.classList.add('visually-hidden');
      saSmall.classList.remove('visually-hidden');
      saMedium.classList.remove('visually-hidden');
      saLarge.classList.remove('visually-hidden');
      break;

    default:
      break;
  }
};

saList.addEventListener('click', numberOfEndUsers);
