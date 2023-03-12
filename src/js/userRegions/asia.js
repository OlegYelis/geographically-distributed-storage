import { store } from '../store';
import { getRefs } from '../getRefs';

const {
  asList,
  asSmall,
  asMedium,
  asLarge,
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
    store.asiaUsers = number;

    if (!store.status) {
      store.status = 'users';
      skipUsers.classList.remove('visually-hidden');
    }

    switch (number) {
      case 3:
        asLarge.classList.remove('visually-hidden');

      case 2:
        asMedium.classList.remove('visually-hidden');

      case 1:
        asSmall.classList.remove('visually-hidden');
        asList.classList.add('visually-hidden');
      default:
    }

    const { sAmericaUsers, nAmericaUsers, europeUsers, australiaUsers } = store;

    if (sAmericaUsers && nAmericaUsers && europeUsers && australiaUsers) {
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

asList.addEventListener('click', numberOfEndUsers);
