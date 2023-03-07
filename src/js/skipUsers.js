import { store } from './store';
import { getRefs } from './getRefs';

const {
  skipUsers,
  naList,
  saList,
  euList,
  asList,
  auList,
  naFirstCircle,
  naSecondCircle,
  europeCircle,
  asiaCircle,
  topText,
} = getRefs;

const nextStepHandler = () => {
  if (!store.sAmericaUsers) {
    saList.classList.add('visually-hidden');
  }

  if (!store.nAmericaUsers) {
    naList.classList.add('visually-hidden');
  }

  if (!store.europeUsers) {
    euList.classList.add('visually-hidden');
  }

  if (!store.australiaUsers) {
    auList.classList.add('visually-hidden');
  }

  if (!store.asiaUsers) {
    asList.classList.add('visually-hidden');
  }

  store.status = 'servers';
  skipUsers.classList.add('visually-hidden');
  naFirstCircle.classList.remove('visually-hidden');
  naSecondCircle.classList.remove('visually-hidden');
  europeCircle.classList.remove('visually-hidden');
  asiaCircle.classList.remove('visually-hidden');
  topText.textContent =
    'Where is your data? Choose one spot for Object Storage system';
};

skipUsers.addEventListener('click', nextStepHandler);
