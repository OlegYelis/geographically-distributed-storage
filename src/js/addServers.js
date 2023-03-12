import { store } from './store';
import { getRefs } from './getRefs';
import { startTestHandler } from './startTest';

const {
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
  topText,
  startTest,
} = getRefs;

const addServerHandler = evt => {
  const serverPlace = evt.target.dataset.value;

  if (!store.blueServer) {
    switch (serverPlace) {
      case 'na1':
        naFirstBlue.classList.remove('visually-hidden');
        store.naFirstServer = true;
        break;

      case 'na2':
        naSecondBlue.classList.remove('visually-hidden');
        store.naSecondServer = true;
        break;

      case 'eu':
        europeBlue.classList.remove('visually-hidden');
        store.europeServer = true;
        break;

      case 'as':
        asiaBlue.classList.remove('visually-hidden');
        store.asiaServer = true;
        break;

      default:
        break;
    }
    store.blueServer = serverPlace;
    topText.textContent =
      'Choose minimum two additional spots for ByteCloud and press';
    startTest.classList.remove('visually-hidden');
  } else {
    switch (serverPlace) {
      case 'na1':
        naFirstRed.classList.remove('visually-hidden');
        store.naFirstServer = true;
        break;

      case 'na2':
        naSecondRed.classList.remove('visually-hidden');
        store.naSecondServer = true;
        break;

      case 'eu':
        europeRed.classList.remove('visually-hidden');
        store.europeServer = true;
        break;

      case 'as':
        asiaRed.classList.remove('visually-hidden');
        store.asiaServer = true;
        break;

      default:
        break;
    }
    store.numberOfServers += 1;

    if (store.numberOfServers >= 2) {
      startTest.classList.remove('disabled');
    }
  }
  evt.target.style.background = 'none';

  if (
    store.asiaServer &&
    store.europeServer &&
    store.naSecondServer &&
    store.naFirstServer
  ) {
    startTestHandler();
  }
};

naFirstCircle.addEventListener('click', addServerHandler);
naSecondCircle.addEventListener('click', addServerHandler);
europeCircle.addEventListener('click', addServerHandler);
asiaCircle.addEventListener('click', addServerHandler);
