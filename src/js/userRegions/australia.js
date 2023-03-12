import { store } from '../store';
import { getRefs } from '../getRefs';

const {
  auList,
  auSmall,
  auMedium,
  auLarge,
  skipUsers,
  naFirstCircle,
  naSecondCircle,
  europeCircle,
  asiaCircle,
  topText,
} = getRefs;

const numberOfEndUsers = evt => {
  const number = evt.target.value;
  if (number) {
    store.australiaUsers = number;

    if (!store.status) {
      store.status = 'users';
      skipUsers.classList.remove('visually-hidden');
    }

    switch (number) {
      case 3:
        auLarge.classList.remove('visually-hidden');

      case 2:
        auMedium.classList.remove('visually-hidden');

      case 1:
        auSmall.classList.remove('visually-hidden');
        auList.classList.add('visually-hidden');

      default:
    }

    const { sAmericaUsers, nAmericaUsers, europeUsers, asiaUsers } = store;

    if (sAmericaUsers && nAmericaUsers && europeUsers && asiaUsers) {
      store.status = 'servers';
      skipUsers.classList.add('visually-hidden');
      naFirstCircle.classList.remove('visually-hidden');
      naSecondCircle.classList.remove('visually-hidden');
      europeCircle.classList.remove('visually-hidden');
      asiaCircle.classList.remove('visually-hidden');
      topText.textContent =
        'Where is your data? Choose one spot for Object Storage system';
    }
  }
};

auList.addEventListener('click', numberOfEndUsers);
