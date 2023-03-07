import { store } from './store';
import { getRefs } from './getRefs';

const {
  naList,
  naSmall,
  naMedium,
  naLarge,
  skipUsers,
  naFirstCircle,
  naSecondCircle,
  europeCircle,
  asiaCircle,
  topText,
} = getRefs;

const numberOfEndUsers = evt => {
  const number = evt.target.value;

  store.nAmericaUsers = number;

  if (!store.status) {
    store.status = 'users';
    skipUsers.classList.remove('visually-hidden');
  }

  switch (number) {
    case 3:
      naLarge.classList.remove('visually-hidden');

    case 2:
      naMedium.classList.remove('visually-hidden');

    case 1:
      naSmall.classList.remove('visually-hidden');

    default:
      naList.classList.add('visually-hidden');
  }

  const { sAmericaUsers, europeUsers, asiaUsers, australiaUsers } = store;

  if (sAmericaUsers && europeUsers && asiaUsers && australiaUsers) {
    store.status = 'servers';
    skipUsers.classList.add('visually-hidden');
    naFirstCircle.classList.remove('visually-hidden');
    naSecondCircle.classList.remove('visually-hidden');
    europeCircle.classList.remove('visually-hidden');
    asiaCircle.classList.remove('visually-hidden');
    topText.textContent =
      'Where is your data? Choose one spot for Object Storage system';
  }
};

naList.addEventListener('click', numberOfEndUsers);
