import { store } from '../store';
import { getRefs } from '../getRefs';

const {
  saList,
  saSmall,
  saMedium,
  saLarge,
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
    store.sAmericaUsers = number;

    if (!store.status) {
      store.status = 'users';
      skipUsers.classList.remove('visually-hidden');
    }

    switch (number) {
      case 3:
        saLarge.classList.remove('visually-hidden');

      case 2:
        saMedium.classList.remove('visually-hidden');

      case 1:
        saSmall.classList.remove('visually-hidden');
        saList.classList.add('visually-hidden');

      default:
    }

    const { nAmericaUsers, europeUsers, asiaUsers, australiaUsers } = store;

    if (nAmericaUsers && europeUsers && asiaUsers && australiaUsers) {
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

saList.addEventListener('click', numberOfEndUsers);
