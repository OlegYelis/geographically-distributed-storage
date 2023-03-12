import { store } from '../store';
import { getRefs } from '../getRefs';

const {
  naList,
  naSmall,
  naMedium,
  naLarge,
  skipUsers,
  naFirstPlace,
  naSecondPlace,
  europePlace,
  asiaPlace,
  topText,
} = getRefs;

const numberOfEndUsers = evt => {
  const number = evt.target.value;
  if (number) {
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
        naList.classList.add('visually-hidden');

      default:
    }

    const { sAmericaUsers, europeUsers, asiaUsers, australiaUsers } = store;

    if (sAmericaUsers && europeUsers && asiaUsers && australiaUsers) {
      store.status = 'servers';
      skipUsers.classList.add('visually-hidden');
      naFirstPlace.classList.remove('visually-hidden');
      naSecondPlace.classList.remove('visually-hidden');
      europePlace.classList.remove('visually-hidden');
      asiaPlace.classList.remove('visually-hidden');
      topText.textContent =
        'Where is your data? Choose one spot for Object Storage system';
    }
  }
};

naList.addEventListener('click', numberOfEndUsers);
