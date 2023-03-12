import { getRefs } from './getRefs';
import { store } from './store';

const {
  startAgain,
  topText,
  modalEl,
  naFirstCircle,
  naSecondCircle,
  europeCircle,
  asiaCircle,
  naFirstBlue,
  naSecondBlue,
  europeBlue,
  asiaBlue,
  naFirstRed,
  naSecondRed,
  europeRed,
  asiaRed,
  asLarge,
  asMedium,
  asSmall,
  asList,
  auLarge,
  auMedium,
  auSmall,
  auList,
  euLarge,
  euMedium,
  euSmall,
  euList,
  naLarge,
  naMedium,
  naSmall,
  naList,
  saLarge,
  saMedium,
  saSmall,
  saList,
  naFirstPlace,
  naSecondPlace,
  europePlace,
  asiaPlace,
} = getRefs;

const startAgainHandler = () => {
  startAgain.classList.add('visually-hidden');
  topText.textContent =
    'Where are your users? Chose the number for every region';
  modalEl.classList.add('visually-hidden');
  switch (store.blueServer) {
    case 'na1':
      naFirstBlue.classList.add('visually-hidden');
      store.naFirstServer = false;
      break;

    case 'na2':
      naSecondBlue.classList.add('visually-hidden');
      store.naSecondServer = false;
      break;

    case 'eu':
      europeBlue.classList.add('visually-hidden');
      store.europeServer = false;
      break;

    case 'as':
      asiaBlue.classList.add('visually-hidden');
      store.asiaServer = false;
      break;

    default:
      break;
  }
  store.blueServer = false;

  if (store.naFirstServer) {
    naFirstRed.classList.add('visually-hidden');
    store.naFirstServer = false;
  }

  if (store.naSecondServer) {
    naSecondRed.classList.add('visually-hidden');
    store.naSecondServer = false;
  }

  if (store.europeServer) {
    europeRed.classList.add('visually-hidden');
    store.europeServer = false;
  }

  if (store.asiaServer) {
    asiaRed.classList.add('visually-hidden');
    store.asiaServer = false;
  }

  if (!naFirstPlace.classList.contains('visually-hidden')) {
    naFirstPlace.classList.add('visually-hidden');
  }
  if (!naSecondPlace.classList.contains('visually-hidden')) {
    naSecondPlace.classList.add('visually-hidden');
  }
  if (!europePlace.classList.contains('visually-hidden')) {
    europePlace.classList.add('visually-hidden');
  }
  if (!asiaPlace.classList.contains('visually-hidden')) {
    asiaPlace.classList.add('visually-hidden');
  }

  naFirstCircle.classList.remove('visually-hidden');
  naSecondCircle.classList.remove('visually-hidden');
  europeCircle.classList.remove('visually-hidden');
  asiaCircle.classList.remove('visually-hidden');

  switch (store.asiaUsers) {
    case 3:
      asLarge.classList.add('visually-hidden');

    case 2:
      asMedium.classList.add('visually-hidden');

    case 1:
      asSmall.classList.add('visually-hidden');
    default:
      asList.classList.remove('visually-hidden');
      store.asiaUsers = 0;
  }

  switch (store.australiaUsers) {
    case 3:
      auLarge.classList.add('visually-hidden');

    case 2:
      auMedium.classList.add('visually-hidden');

    case 1:
      auSmall.classList.add('visually-hidden');

    default:
      auList.classList.remove('visually-hidden');
      store.australiaUsers = 0;
  }

  switch (store.europeUsers) {
    case 3:
      euLarge.classList.add('visually-hidden');

    case 2:
      euMedium.classList.add('visually-hidden');

    case 1:
      euSmall.classList.add('visually-hidden');

    default:
      euList.classList.remove('visually-hidden');
      store.europeUsers = 0;
  }

  switch (store.nAmericaUsers) {
    case 3:
      naLarge.classList.add('visually-hidden');

    case 2:
      naMedium.classList.add('visually-hidden');

    case 1:
      naSmall.classList.add('visually-hidden');

    default:
      naList.classList.remove('visually-hidden');
      store.nAmericaUsers = 0;
  }

  switch (store.sAmericaUsers) {
    case 3:
      saLarge.classList.add('visually-hidden');

    case 2:
      saMedium.classList.add('visually-hidden');

    case 1:
      saSmall.classList.add('visually-hidden');

    default:
      saList.classList.remove('visually-hidden');
      store.sAmericaUsers = 0;
  }

  store.status = 0;
  store.numberOfServers = 0;

  store.byteCloudHtml = `<li><h2 class="list_title">ByteCloud</h2></li>`;
  store.objectStorageHtml = `<li><h2 class="list_title">Object Storage</h2></li>`;
};

startAgain.addEventListener('click', startAgainHandler);
