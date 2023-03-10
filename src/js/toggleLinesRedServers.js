import { store } from './store';
import { getRefs } from './getRefs';

const {
  singaporeAsiaL,
  singaporeAsiaM,
  singaporeAsiaS,
  singaporeOceaniaL,
  singaporeOceaniaM,
  singaporeOceaniaS,
  germanyOceaniaL,
  germanyOceaniaM,
  germanyOceaniaS,
  germanyAsiaL,
  germanyAsiaM,
  germanyAsiaS,
  germanyEuropeL,
  germanyEuropeM,
  germanyEuropeS,
  westNaNorthL,
  westNaNorthM,
  westNaNorthS,
  westNaSouthL,
  westNaSouthM,
  westNaSouthS,
  eastNaSouthL,
  eastNaSouthM,
  eastNaSouthS,
  eastNaNorthL,
  eastNaNorthM,
  eastNaNorthS,
  eastNaEuropeL,
  eastNaEuropeM,
  eastNaEuropeS,
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

export const fromSingaporeToAsia = time => {
  switch (store.asiaUsers) {
    case 0:
      break;
    case 3:
      singaporeAsiaL.classList.remove('visually-hidden');
      asLargeMask.style.animation = 'changeLargeMaskWidth 1.5s forwards';
      setTimeout(() => {
        singaporeAsiaL.classList.add('visually-hidden');
        asLargeMask.style.animation = 'none';
      }, time);
    case 2:
      singaporeAsiaM.classList.remove('visually-hidden');
      asMediumMask.style.animation = 'changeMediumMaskWidth 1.5s forwards';
      setTimeout(() => {
        singaporeAsiaM.classList.add('visually-hidden');
        asMediumMask.style.animation = 'none';
      }, time);
    case 1:
      singaporeAsiaS.classList.remove('visually-hidden');
      asSmallMask.style.animation = 'changeSmallMaskWidth 1.5s forwards';
      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 73';
      setTimeout(() => {
        asInfo.textContent = 'Time: 41 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeAsiaS.classList.add('visually-hidden');
        asSmallMask.style.animation = 'none';
        asInfo.textContent = '';
        asInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromSingaporeToAustralia = time => {
  switch (store.australiaUsers) {
    case 0:
      break;
    case 3:
      singaporeOceaniaL.classList.remove('visually-hidden');
      auLargeMask.style.animation = 'changeLargeMaskWidth 2.6s forwards';

      setTimeout(() => {
        auLargeMask.style.animation = 'none';
        singaporeOceaniaL.classList.add('visually-hidden');
      }, time);
    case 2:
      singaporeOceaniaM.classList.remove('visually-hidden');
      auMediumMask.style.animation = 'changeMediumMaskWidth 2.6s forwards';

      setTimeout(() => {
        auMediumMask.style.animation = 'none';
        singaporeOceaniaM.classList.add('visually-hidden');
      }, time);
    case 1:
      singaporeOceaniaS.classList.remove('visually-hidden');
      auSmallMask.style.animation = 'changeSmallMaskWidth 2.6s forwards';

      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 93';
      setTimeout(() => {
        auInfo.textContent = 'Time: 63 sec';
      }, time / 2);
      setTimeout(() => {
        auSmallMask.style.animation = 'none';
        singaporeOceaniaS.classList.add('visually-hidden');
        auInfo.textContent = '';
        auInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromGermanyToAustralia = time => {
  switch (store.australiaUsers) {
    case 0:
      break;
    case 3:
      germanyOceaniaL.classList.remove('visually-hidden');
      auLargeMask.style.animation = 'changeLargeMaskWidth 5s forwards';

      setTimeout(() => {
        auLargeMask.style.animation = 'none';
        germanyOceaniaL.classList.add('visually-hidden');
      }, time);
    case 2:
      germanyOceaniaM.classList.remove('visually-hidden');
      auMediumMask.style.animation = 'changeMediumMaskWidth 5s forwards';

      setTimeout(() => {
        germanyOceaniaM.classList.add('visually-hidden');
        auMediumMask.style.animation = 'none';
      }, time);
    case 1:
      germanyOceaniaS.classList.remove('visually-hidden');
      auSmallMask.style.animation = 'changeSmallMaskWidth 5s forwards';
      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 266';
      setTimeout(() => {
        auInfo.textContent = 'Time: 165 sec';
      }, time / 2);
      setTimeout(() => {
        auSmallMask.style.animation = 'none';
        germanyOceaniaS.classList.add('visually-hidden');
        auInfo.textContent = '';
        auInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromGermanyToAsia = time => {
  switch (store.asiaUsers) {
    case 0:
      break;
    case 3:
      germanyAsiaL.classList.remove('visually-hidden');
      asLargeMask.style.animation = 'changeLargeMaskWidth 3s forwards';

      setTimeout(() => {
        germanyAsiaL.classList.add('visually-hidden');
        asLargeMask.style.animation = 'none';
      }, time);
    case 2:
      germanyAsiaM.classList.remove('visually-hidden');
      asMediumMask.style.animation = 'changeMediumMaskWidth 3s forwards';

      setTimeout(() => {
        germanyAsiaM.classList.add('visually-hidden');
        asMediumMask.style.animation = 'none';
      }, time);
    case 1:
      germanyAsiaS.classList.remove('visually-hidden');
      asSmallMask.style.animation = 'changeSmallMaskWidth 3s forwards';

      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 149';
      setTimeout(() => {
        asInfo.textContent = 'Time: 61 sec';
      }, time / 2);
      setTimeout(() => {
        germanyAsiaS.classList.add('visually-hidden');
        asSmallMask.style.animation = 'none';
        asInfo.textContent = '';
        asInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromGermanyToEurope = time => {
  switch (store.europeUsers) {
    case 0:
      break;
    case 3:
      germanyEuropeL.classList.remove('visually-hidden');
      euLargeMask.style.animation = 'changeLargeMaskWidth 0.5s forwards';

      setTimeout(() => {
        germanyEuropeL.classList.add('visually-hidden');
        euLargeMask.style.animation = 'none';
      }, time);
    case 2:
      germanyEuropeM.classList.remove('visually-hidden');
      euMediumMask.style.animation = 'changeMediumMaskWidth 0.5s forwards';

      setTimeout(() => {
        germanyEuropeM.classList.add('visually-hidden');
        euMediumMask.style.animation = 'none';
      }, time);
    case 1:
      germanyEuropeS.classList.remove('visually-hidden');
      euSmallMask.style.animation = 'changeSmallMaskWidth 0.5s forwards';
      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 11';
      setTimeout(() => {
        euInfo.textContent = 'Time: 5 sec';
      }, time / 2);
      setTimeout(() => {
        germanyEuropeS.classList.add('visually-hidden');
        euSmallMask.style.animation = 'none';
        euInfo.textContent = '';
        euInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromWestToNorth = time => {
  switch (store.nAmericaUsers) {
    case 0:
      break;
    case 3:
      westNaNorthL.classList.remove('visually-hidden');
      naLargeMask.style.animation = 'changeLargeMaskWidth 1.3s forwards';

      setTimeout(() => {
        westNaNorthL.classList.add('visually-hidden');
        naLargeMask.style.animation = 'none';
      }, time);
    case 2:
      westNaNorthM.classList.remove('visually-hidden');
      naMediumMask.style.animation = 'changeMediumMaskWidth 1.3s forwards';

      setTimeout(() => {
        westNaNorthM.classList.add('visually-hidden');
        naMediumMask.style.animation = 'none';
      }, time);
    case 1:
      westNaNorthS.classList.remove('visually-hidden');
      naSmallMask.style.animation = 'changeSmallMaskWidth 1.3s forwards';

      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 59';
      setTimeout(() => {
        naInfo.textContent = 'Time: 28 sec';
      }, time / 2);
      setTimeout(() => {
        westNaNorthS.classList.add('visually-hidden');
        naSmallMask.style.animation = 'none';
        naInfo.textContent = '';
        naInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromWestToSouth = time => {
  switch (store.sAmericaUsers) {
    case 0:
      break;
    case 3:
      westNaSouthL.classList.remove('visually-hidden');
      saLargeMask.style.animation = 'changeLargeMaskWidth 3.5s forwards';

      setTimeout(() => {
        westNaSouthL.classList.add('visually-hidden');
        saLargeMask.style.animation = 'none';
      }, time);
    case 2:
      westNaSouthM.classList.remove('visually-hidden');
      saMediumMask.style.animation = 'changeMediumMaskWidth 3.5s forwards';

      setTimeout(() => {
        westNaSouthM.classList.add('visually-hidden');
        saMediumMask.style.animation = 'none';
      }, time);
    case 1:
      westNaSouthS.classList.remove('visually-hidden');
      saSmallMask.style.animation = 'changeSmallMaskWidth 3.5s forwards';

      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 185';
      setTimeout(() => {
        saInfo.textContent = 'Time: 101 sec';
      }, time / 2);
      setTimeout(() => {
        westNaSouthS.classList.add('visually-hidden');
        saSmallMask.style.animation = 'none';
        saInfo.textContent = '';
        saInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromEastToSouth = time => {
  switch (store.sAmericaUsers) {
    case 0:
      break;
    case 3:
      eastNaSouthL.classList.remove('visually-hidden');
      saLargeMask.style.animation = 'changeLargeMaskWidth 3.9s forwards';

      setTimeout(() => {
        eastNaSouthL.classList.add('visually-hidden');
        saLargeMask.style.animation = 'none';
      }, time);
    case 2:
      eastNaSouthM.classList.remove('visually-hidden');
      saMediumMask.style.animation = 'changeMediumMaskWidth 3.9s forwards';

      setTimeout(() => {
        eastNaSouthM.classList.add('visually-hidden');
        saMediumMask.style.animation = 'none';
      }, time);
    case 1:
      eastNaSouthS.classList.remove('visually-hidden');
      saSmallMask.style.animation = 'changeSmallMaskWidth 3.9s forwards';

      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 185';
      setTimeout(() => {
        saInfo.textContent = 'Time: 101 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaSouthS.classList.add('visually-hidden');
        saSmallMask.style.animation = 'none';
        saInfo.textContent = '';
        saInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromEastToNorth = time => {
  switch (store.nAmericaUsers) {
    case 0:
      break;
    case 3:
      eastNaNorthL.classList.remove('visually-hidden');
      naLargeMask.style.animation = 'changeLargeMaskWidth 0.4s forwards';

      setTimeout(() => {
        eastNaNorthL.classList.add('visually-hidden');
        naLargeMask.style.animation = 'none';
      }, time);
    case 2:
      eastNaNorthM.classList.remove('visually-hidden');
      naMediumMask.style.animation = 'changeMediumMaskWidth 0.4s forwards';

      setTimeout(() => {
        eastNaNorthM.classList.add('visually-hidden');
        naMediumMask.style.animation = 'none';
      }, time);
    case 1:
      eastNaNorthS.classList.remove('visually-hidden');
      naSmallMask.style.animation = 'changeSmallMaskWidth 0.4s forwards';
      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 23';
      setTimeout(() => {
        naInfo.textContent = 'Time: 9 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaNorthS.classList.add('visually-hidden');
        naSmallMask.style.animation = 'none';
        naInfo.textContent = '';
        naInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};

export const fromEastToEurope = time => {
  switch (store.europeUsers) {
    case 0:
      break;
    case 3:
      eastNaEuropeL.classList.remove('visually-hidden');
      euLargeMask.style.animation = 'changeLargeMaskWidth 3.2s forwards';

      setTimeout(() => {
        eastNaEuropeL.classList.add('visually-hidden');
        euLargeMask.style.animation = 'none';
      }, time);
    case 2:
      eastNaEuropeM.classList.remove('visually-hidden');
      euMediumMask.style.animation = 'changeMediumMaskWidth 3.2s forwards';

      setTimeout(() => {
        eastNaEuropeM.classList.add('visually-hidden');
        euMediumMask.style.animation = 'none';
      }, time);
    case 1:
      eastNaEuropeS.classList.remove('visually-hidden');
      euSmallMask.style.animation = 'changeSmallMaskWidth 3.2s forwards';

      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 85';
      setTimeout(() => {
        euInfo.textContent = 'Time: 62 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaEuropeS.classList.add('visually-hidden');
        euSmallMask.style.animation = 'none';
        euInfo.textContent = '';
        euInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};
