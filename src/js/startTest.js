import { store } from './store';
import { getRefs } from './getRefs';
import {
  fromEastToEurope,
  fromEastToNorth,
  fromEastToSouth,
  fromGermanyToAsia,
  fromGermanyToAustralia,
  fromGermanyToEurope,
  fromSingaporeToAsia,
  fromSingaporeToAustralia,
  fromWestToNorth,
  fromWestToSouth,
} from './toggleLinesRedServers';
import {
  eastBlueServer,
  germanyBlueServer,
  singaporeBlueServer,
  westBlueServer,
} from './toggleLinesBlueServer';
import { showTable } from './resultTable';

const {
  startTest,
  topText,
  asiaCircle,
  europeCircle,
  naSecondCircle,
  naFirstCircle,
} = getRefs;

export const startTestHandler = () => {
  if (store.numberOfServers < 2) {
    return;
  }

  startTest.classList.add('visually-hidden');
  topText.textContent = '';

  let timeOut = 5000;

  if (
    store.asiaUsers === 0 &&
    store.australiaUsers === 0 &&
    store.sAmericaUsers === 0
  ) {
    console.log(store.asiaUsers, store.australiaUsers, store.sAmericaUsers);
    timeOut = 1000;
  }

  if (!store.asiaServer) {
    asiaCircle.style.background = 'none';
    fromGermanyToAustralia(timeOut);
    fromGermanyToAsia(timeOut);
    fromGermanyToEurope(timeOut);
    fromEastToNorth(timeOut);
    fromWestToSouth(timeOut);
  } else if (!store.europeServer) {
    europeCircle.style.background = 'none';
    fromSingaporeToAsia(timeOut);
    fromSingaporeToAustralia(timeOut);
    fromEastToNorth(timeOut);
    fromEastToEurope(timeOut);
    fromWestToSouth(timeOut);
  } else if (!store.naFirstServer) {
    naFirstCircle.style.background = 'none';
    fromEastToSouth(timeOut);
    fromEastToNorth(timeOut);
    fromGermanyToEurope(timeOut);
    fromSingaporeToAustralia(timeOut);
    fromSingaporeToAsia(timeOut);
  } else if (!store.naSecondServer) {
    naSecondCircle.style.background = 'none';
    fromWestToNorth(timeOut);
    fromWestToSouth(timeOut);
    fromGermanyToEurope(timeOut);
    fromSingaporeToAsia(timeOut);
    fromSingaporeToAustralia(timeOut);
  } else {
    fromWestToSouth(timeOut);
    fromEastToNorth(timeOut);
    fromGermanyToEurope(timeOut);
    fromSingaporeToAsia(timeOut);
    fromSingaporeToAustralia(timeOut);
  }

  setTimeout(() => {
    switch (store.blueServer) {
      case 'na1':
        westBlueServer(timeOut * 2);
        showTable(timeOut * 2);
        break;

      case 'na2':
        eastBlueServer(timeOut * 2);
        showTable(timeOut * 2);
        break;

      case 'eu':
        germanyBlueServer(timeOut * 2);
        showTable(timeOut * 2);
        break;

      case 'as':
        singaporeBlueServer(timeOut * 2);
        showTable(timeOut * 2);
        break;

      default:
        break;
    }
  }, timeOut + 50);
};

startTest.addEventListener('click', () => {
  startTestHandler();
});
