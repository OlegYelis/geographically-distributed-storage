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

const {
  westNaEuropeL,
  westNaEuropeM,
  westNaEuropeS,
  westNaAsiaL,
  westNaAsiaM,
  westNaAsiaS,
  westNaOceaniaL,
  westNaOceaniaM,
  westNaOceaniaS,
  eastNaAsiaL,
  eastNaAsiaM,
  eastNaAsiaS,
  eastNaOceaniaL,
  eastNaOceaniaM,
  eastNaOceaniaS,
  germanyNorthL,
  germanyNorthM,
  germanyNorthS,
  germanySouthL,
  germanySouthM,
  germanySouthS,
  singaporeEuropeL,
  singaporeEuropeM,
  singaporeEuropeS,
  singaporeNorthL,
  singaporeNorthM,
  singaporeNorthS,
  singaporeSouthL,
  singaporeSouthM,
  singaporeSouthS,
  naInfo,
  saInfo,
  euInfo,
  asInfo,
  auInfo,
} = getRefs;

export const westBlueServer = time => {
  fromWestToNorth(time);
  fromWestToSouth(time);

  switch (store.europeUsers) {
    case 0:
      break;
    case 3:
      westNaEuropeL.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaEuropeL.classList.add('visually-hidden');
      }, time);
    case 2:
      westNaEuropeM.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaEuropeM.classList.add('visually-hidden');
      }, time);
    case 1:
      westNaEuropeS.classList.remove('visually-hidden');
      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 141';
      setTimeout(() => {
        euInfo.textContent = 'Time: 60 sec';
      }, time / 2);
      setTimeout(() => {
        westNaEuropeS.classList.add('visually-hidden');
        euInfo.textContent = '';
        euInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }

  switch (store.asiaUsers) {
    case 0:
      break;
    case 3:
      westNaAsiaL.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaAsiaL.classList.add('visually-hidden');
      }, time);
    case 2:
      westNaAsiaM.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaAsiaM.classList.add('visually-hidden');
      }, time);
    case 1:
      westNaAsiaS.classList.remove('visually-hidden');
      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 270';
      setTimeout(() => {
        asInfo.textContent = 'Time: 170 sec';
      }, time / 2);
      setTimeout(() => {
        westNaAsiaS.classList.add('visually-hidden');
        asInfo.textContent = '';
        asInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }

  switch (store.australiaUsers) {
    case 0:
      break;
    case 3:
      westNaOceaniaL.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaOceaniaL.classList.add('visually-hidden');
      }, time);
    case 2:
      westNaOceaniaM.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaOceaniaM.classList.add('visually-hidden');
      }, time);
    case 1:
      westNaOceaniaS.classList.remove('visually-hidden');
      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 367';
      setTimeout(() => {
        auInfo.textContent = 'Time: 265 sec';
      }, time / 2);
      setTimeout(() => {
        westNaOceaniaS.classList.add('visually-hidden');
        auInfo.textContent = '';
        auInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const eastBlueServer = time => {
  fromEastToSouth(time);
  fromEastToNorth(time);
  fromEastToEurope(time);

  switch (store.asiaUsers) {
    case 0:
      break;
    case 3:
      eastNaAsiaL.classList.remove('visually-hidden');
      setTimeout(() => {
        eastNaAsiaL.classList.add('visually-hidden');
      }, time);
    case 2:
      eastNaAsiaM.classList.remove('visually-hidden');
      setTimeout(() => {
        eastNaAsiaM.classList.add('visually-hidden');
      }, time);
    case 1:
      eastNaAsiaS.classList.remove('visually-hidden');
      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 232';
      setTimeout(() => {
        asInfo.textContent = 'Time: 140 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaAsiaS.classList.add('visually-hidden');
        asInfo.textContent = '';
        asInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }

  switch (store.australiaUsers) {
    case 0:
      break;
    case 3:
      eastNaOceaniaL.classList.remove('visually-hidden');
      setTimeout(() => {
        eastNaOceaniaL.classList.add('visually-hidden');
      }, time);
    case 2:
      eastNaOceaniaM.classList.remove('visually-hidden');
      setTimeout(() => {
        eastNaOceaniaM.classList.add('visually-hidden');
      }, time);
    case 1:
      eastNaOceaniaS.classList.remove('visually-hidden');
      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 207';
      setTimeout(() => {
        auInfo.textContent = 'Time: 110 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaOceaniaS.classList.add('visually-hidden');
        auInfo.textContent = '';
        auInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const germanyBlueServer = time => {
  fromGermanyToEurope(time);
  fromGermanyToAsia(time);
  fromGermanyToAustralia(time);

  switch (store.nAmericaUsers) {
    case 0:
      break;
    case 3:
      germanyNorthL.classList.remove('visually-hidden');
      setTimeout(() => {
        germanyNorthL.classList.add('visually-hidden');
      }, time);
    case 2:
      germanyNorthM.classList.remove('visually-hidden');
      setTimeout(() => {
        germanyNorthM.classList.add('visually-hidden');
      }, time);
    case 1:
      germanyNorthS.classList.remove('visually-hidden');
      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 101';
      setTimeout(() => {
        naInfo.textContent = 'Time: 56 sec';
      }, time / 2);
      setTimeout(() => {
        germanyNorthS.classList.add('visually-hidden');
        naInfo.textContent = '';
        naInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }

  switch (store.sAmericaUsers) {
    case 0:
      break;
    case 3:
      germanySouthL.classList.remove('visually-hidden');
      setTimeout(() => {
        germanySouthL.classList.add('visually-hidden');
      }, time);
    case 2:
      germanySouthM.classList.remove('visually-hidden');
      setTimeout(() => {
        germanySouthM.classList.add('visually-hidden');
      }, time);
    case 1:
      germanySouthS.classList.remove('visually-hidden');
      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 174';
      setTimeout(() => {
        saInfo.textContent = 'Time: 75 sec';
      }, time / 2);
      setTimeout(() => {
        germanySouthS.classList.add('visually-hidden');
        saInfo.textContent = '';
        saInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const singaporeBlueServer = time => {
  fromSingaporeToAsia(time);
  fromSingaporeToAustralia(time);

  switch (store.europeUsers) {
    case 0:
      break;
    case 3:
      singaporeEuropeL.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeEuropeL.classList.add('visually-hidden');
      }, time);
    case 2:
      singaporeEuropeM.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeEuropeM.classList.add('visually-hidden');
      }, time);
    case 1:
      singaporeEuropeS.classList.remove('visually-hidden');
      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 250';
      setTimeout(() => {
        euInfo.textContent = 'Time: 125 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeEuropeS.classList.add('visually-hidden');
        euInfo.textContent = '';
        euInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }

  switch (store.nAmericaUsers) {
    case 0:
      break;
    case 3:
      singaporeNorthL.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeNorthL.classList.add('visually-hidden');
      }, time);
    case 2:
      singaporeNorthM.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeNorthM.classList.add('visually-hidden');
      }, time);
    case 1:
      singaporeNorthS.classList.remove('visually-hidden');
      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 226';
      setTimeout(() => {
        naInfo.textContent = 'Time: 113 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeNorthS.classList.add('visually-hidden');
        naInfo.textContent = '';
        naInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }

  switch (store.sAmericaUsers) {
    case 0:
      break;
    case 3:
      singaporeSouthL.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeSouthL.classList.add('visually-hidden');
      }, time);
    case 2:
      singaporeSouthM.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeSouthM.classList.add('visually-hidden');
      }, time);
    case 1:
      singaporeSouthS.classList.remove('visually-hidden');
      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 185';
      setTimeout(() => {
        saInfo.textContent = 'Time: 101 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeSouthS.classList.add('visually-hidden');
        saInfo.textContent = '';
        saInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};
