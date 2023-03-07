import { store } from './store';
import { getRefs } from './getRefs';

const {
  euList,
  euSmall,
  euMedium,
  euLarge,
  skipUsers,
  naFirstCircle,
  naSecondCircle,
  europeCircle,
  asiaCircle,
  topText,
} = getRefs;

const numberOfEndUsers = evt => {
  const number = evt.target.value;

  store.europeUsers = number;

  if (!store.status) {
    store.status = 'users';
    skipUsers.classList.remove('visually-hidden');
  }

  switch (number) {
    case 3:
      euLarge.classList.remove('visually-hidden');

    case 2:
      euMedium.classList.remove('visually-hidden');

    case 1:
      euSmall.classList.remove('visually-hidden');

    default:
      euList.classList.add('visually-hidden');
  }

  const { sAmericaUsers, nAmericaUsers, asiaUsers, australiaUsers } = store;

  if (sAmericaUsers && nAmericaUsers && asiaUsers && australiaUsers) {
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

euList.addEventListener('click', numberOfEndUsers);
