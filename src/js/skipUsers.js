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
} = getRefs;
const { sAmericaUsers, nAmericaUsers, europeUsers, australiaUsers, asiaUsers } =
  store;

const nextStepHandler = () => {
  if (!sAmericaUsers) {
    saList.classList.add('visually-hidden');
  }

  if (!nAmericaUsers) {
    naList.classList.add('visually-hidden');
  }

  if (!europeUsers) {
    euList.classList.add('visually-hidden');
  }

  if (!australiaUsers) {
    auList.classList.add('visually-hidden');
  }

  if (!asiaUsers) {
    asList.classList.add('visually-hidden');
  }

  store.status = 'servers';
  skipUsers.classList.add('visually-hidden');
  naFirstCircle.classList.remove('visually-hidden');
  naSecondCircle.classList.remove('visually-hidden');
  europeCircle.classList.remove('visually-hidden');
  asiaCircle.classList.remove('visually-hidden');
};

skipUsers.addEventListener('click', nextStepHandler);
