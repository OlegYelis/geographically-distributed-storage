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
  naSmallMask,
  naMediumMask,
  naLargeMask,
  saSmallMask,
  saMediumMask,
  saLargeMask,
  euSmallMask,
  euMediumMask,
  euLargeMask,
  asSmallMask,
  asMediumMask,
  asLargeMask,
  auSmallMask,
  auMediumMask,
  auLargeMask,
} = getRefs;

export const westBlueServer = time => {
  fromWestToNorth(time);
  fromWestToSouth(time);

  switch (store.europeUsers) {
    case 0:
      break;
    case 3:
      westNaEuropeL.classList.remove('visually-hidden');
      euLargeMask.style.animation = 'changeLargeMaskWidth 4.5s forwards';

      setTimeout(() => {
        westNaEuropeL.classList.add('visually-hidden');
        euLargeMask.style.animation = 'none';
      }, time);
    case 2:
      westNaEuropeM.classList.remove('visually-hidden');
      euMediumMask.style.animation = 'changeMediumMaskWidth 4.5s forwards';

      setTimeout(() => {
        westNaEuropeM.classList.add('visually-hidden');
        euMediumMask.style.animation = 'none';
      }, time);
    case 1:
      westNaEuropeS.classList.remove('visually-hidden');
      euSmallMask.style.animation = 'changeSmallMaskWidth 4.5s forwards';

      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 141';
      setTimeout(() => {
        euInfo.textContent = 'Time: 60 sec';
      }, time / 2);
      setTimeout(() => {
        westNaEuropeS.classList.add('visually-hidden');
        euSmallMask.style.animation = 'none';
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
      asLargeMask.style.animation = 'changeLargeMaskWidth 5.5s forwards';

      setTimeout(() => {
        westNaAsiaL.classList.add('visually-hidden');
        asLargeMask.style.animation = 'none';
      }, time);
    case 2:
      westNaAsiaM.classList.remove('visually-hidden');
      asMediumMask.style.animation = 'changeMediumMaskWidth 5.5s forwards';

      setTimeout(() => {
        westNaAsiaM.classList.add('visually-hidden');
        asMediumMask.style.animation = 'none';
      }, time);
    case 1:
      westNaAsiaS.classList.remove('visually-hidden');
      asSmallMask.style.animation = 'changeSmallMaskWidth 5.5s forwards';

      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 270';
      setTimeout(() => {
        asInfo.textContent = 'Time: 170 sec';
      }, time / 2);
      setTimeout(() => {
        westNaAsiaS.classList.add('visually-hidden');
        asSmallMask.style.animation = 'none';
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
      auLargeMask.style.animation = 'changeLargeMaskWidth 6.5s forwards';

      setTimeout(() => {
        westNaOceaniaL.classList.add('visually-hidden');
        auLargeMask.style.animation = 'none';
      }, time);
    case 2:
      westNaOceaniaM.classList.remove('visually-hidden');
      auMediumMask.style.animation = 'changeMediumMaskWidth 6.5s forwards';

      setTimeout(() => {
        westNaOceaniaM.classList.add('visually-hidden');
        auMediumMask.style.animation = 'none';
      }, time);
    case 1:
      westNaOceaniaS.classList.remove('visually-hidden');
      auSmallMask.style.animation = 'changeSmallMaskWidth 6.5s forwards';

      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 367';
      setTimeout(() => {
        auInfo.textContent = 'Time: 265 sec';
      }, time / 2);
      setTimeout(() => {
        westNaOceaniaS.classList.add('visually-hidden');
        auSmallMask.style.animation = 'none';
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
      asLargeMask.style.animation = 'changeLargeMaskWidth 5s forwards';

      setTimeout(() => {
        eastNaAsiaL.classList.add('visually-hidden');
        asLargeMask.style.animation = 'none';
      }, time);
    case 2:
      eastNaAsiaM.classList.remove('visually-hidden');
      asMediumMask.style.animation = 'changeMediumMaskWidth 5s forwards';

      setTimeout(() => {
        eastNaAsiaM.classList.add('visually-hidden');
        asMediumMask.style.animation = 'none';
      }, time);
    case 1:
      eastNaAsiaS.classList.remove('visually-hidden');
      asSmallMask.style.animation = 'changeSmallMaskWidth 5s forwards';
      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 232';
      setTimeout(() => {
        asInfo.textContent = 'Time: 140 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaAsiaS.classList.add('visually-hidden');
        asSmallMask.style.animation = 'none';
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
      auLargeMask.style.animation = 'changeLargeMaskWidth 6s forwards';

      setTimeout(() => {
        eastNaOceaniaL.classList.add('visually-hidden');
        auLargeMask.style.animation = 'none';
      }, time);
    case 2:
      eastNaOceaniaM.classList.remove('visually-hidden');
      auMediumMask.style.animation = 'changeMediumMaskWidth 6s forwards';

      setTimeout(() => {
        eastNaOceaniaM.classList.add('visually-hidden');
        auMediumMask.style.animation = 'none';
      }, time);
    case 1:
      eastNaOceaniaS.classList.remove('visually-hidden');
      auSmallMask.style.animation = 'changeSmallMaskWidth 6s forwards';

      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 207';
      setTimeout(() => {
        auInfo.textContent = 'Time: 110 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaOceaniaS.classList.add('visually-hidden');
        auSmallMask.style.animation = 'none';

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
      naLargeMask.style.animation = 'changeLargeMaskWidth 3s forwards';

      setTimeout(() => {
        germanyNorthL.classList.add('visually-hidden');
        naLargeMask.style.animation = 'none';
      }, time);
    case 2:
      germanyNorthM.classList.remove('visually-hidden');
      naMediumMask.style.animation = 'changeMediumMaskWidth 3s forwards';

      setTimeout(() => {
        germanyNorthM.classList.add('visually-hidden');
        naMediumMask.style.animation = 'none';
      }, time);
    case 1:
      germanyNorthS.classList.remove('visually-hidden');
      naSmallMask.style.animation = 'changeSmallMaskWidth 3s forwards';

      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 101';
      setTimeout(() => {
        naInfo.textContent = 'Time: 56 sec';
      }, time / 2);
      setTimeout(() => {
        germanyNorthS.classList.add('visually-hidden');
        naSmallMask.style.animation = 'none';
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
      saLargeMask.style.animation = 'changeLargeMaskWidth 3.9s forwards';

      setTimeout(() => {
        germanySouthL.classList.add('visually-hidden');
        saLargeMask.style.animation = 'none';
      }, time);
    case 2:
      germanySouthM.classList.remove('visually-hidden');
      saMediumMask.style.animation = 'changeMediumMaskWidth 3.9s forwards';

      setTimeout(() => {
        germanySouthM.classList.add('visually-hidden');
        saMediumMask.style.animation = 'none';
      }, time);
    case 1:
      germanySouthS.classList.remove('visually-hidden');
      saSmallMask.style.animation = 'changeSmallMaskWidth 3.9s forwards';

      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 174';
      setTimeout(() => {
        saInfo.textContent = 'Time: 75 sec';
      }, time / 2);
      setTimeout(() => {
        germanySouthS.classList.add('visually-hidden');
        saSmallMask.style.animation = 'none';
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
      euLargeMask.style.animation = 'changeLargeMaskWidth 5.5s forwards';

      setTimeout(() => {
        singaporeEuropeL.classList.add('visually-hidden');
        euLargeMask.style.animation = 'none';
      }, time);
    case 2:
      singaporeEuropeM.classList.remove('visually-hidden');
      euMediumMask.style.animation = 'changeMediumMaskWidth 5.5s forwards';

      setTimeout(() => {
        singaporeEuropeM.classList.add('visually-hidden');
        euMediumMask.style.animation = 'none';
      }, time);
    case 1:
      singaporeEuropeS.classList.remove('visually-hidden');
      euSmallMask.style.animation = 'changeSmallMaskWidth 5.5s forwards';

      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 250';
      setTimeout(() => {
        euInfo.textContent = 'Time: 125 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeEuropeS.classList.add('visually-hidden');
        euSmallMask.style.animation = 'none';
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
      naLargeMask.style.animation = 'changeLargeMaskWidth 6s forwards';

      setTimeout(() => {
        singaporeNorthL.classList.add('visually-hidden');
        naLargeMask.style.animation = 'none';
      }, time);
    case 2:
      singaporeNorthM.classList.remove('visually-hidden');
      naMediumMask.style.animation = 'changeMediumMaskWidth 6s forwards';

      setTimeout(() => {
        singaporeNorthM.classList.add('visually-hidden');
        naMediumMask.style.animation = 'none';
      }, time);
    case 1:
      singaporeNorthS.classList.remove('visually-hidden');
      naSmallMask.style.animation = 'changeSmallMaskWidth 6s forwards';

      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 226';
      setTimeout(() => {
        naInfo.textContent = 'Time: 113 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeNorthS.classList.add('visually-hidden');
        naSmallMask.style.animation = 'none';
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
      saLargeMask.style.animation = 'changeLargeMaskWidth 6.7s forwards';

      setTimeout(() => {
        singaporeSouthL.classList.add('visually-hidden');
        saLargeMask.style.animation = 'none';
      }, time);
    case 2:
      singaporeSouthM.classList.remove('visually-hidden');
      saMediumMask.style.animation = 'changeMediumMaskWidth 6.7s forwards';

      setTimeout(() => {
        singaporeSouthM.classList.add('visually-hidden');
        saMediumMask.style.animation = 'none';
      }, time);
    case 1:
      singaporeSouthS.classList.remove('visually-hidden');
      saSmallMask.style.animation = 'changeSmallMaskWidth 6.7s forwards';

      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 185';
      setTimeout(() => {
        saInfo.textContent = 'Time: 101 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeSouthS.classList.add('visually-hidden');
        saSmallMask.style.animation = 'none';
        saInfo.textContent = '';
        saInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};
