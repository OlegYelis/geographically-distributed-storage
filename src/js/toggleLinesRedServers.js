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
} = getRefs;

export const fromSingaporeToAsia = time => {
  switch (store.asiaUsers) {
    case 0:
      break;
    case 3:
      singaporeAsiaL.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeAsiaL.classList.add('visually-hidden');
      }, time);
    case 2:
      singaporeAsiaM.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeAsiaM.classList.add('visually-hidden');
      }, time);
    case 1:
      singaporeAsiaS.classList.remove('visually-hidden');
      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 73';
      setTimeout(() => {
        asInfo.textContent = 'Time: 41 sec';
      }, time / 2);
      setTimeout(() => {
        singaporeAsiaS.classList.add('visually-hidden');
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
      setTimeout(() => {
        singaporeOceaniaL.classList.add('visually-hidden');
      }, time);
    case 2:
      singaporeOceaniaM.classList.remove('visually-hidden');
      setTimeout(() => {
        singaporeOceaniaM.classList.add('visually-hidden');
      }, time);
    case 1:
      singaporeOceaniaS.classList.remove('visually-hidden');
      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 93';
      setTimeout(() => {
        auInfo.textContent = 'Time: 63 sec';
      }, time / 2);
      setTimeout(() => {
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
      setTimeout(() => {
        germanyOceaniaL.classList.add('visually-hidden');
      }, time);
    case 2:
      germanyOceaniaM.classList.remove('visually-hidden');
      setTimeout(() => {
        germanyOceaniaM.classList.add('visually-hidden');
      }, time);
    case 1:
      germanyOceaniaS.classList.remove('visually-hidden');
      auInfo.classList.remove('visually-hidden');
      auInfo.textContent = 'Latency: 266';
      setTimeout(() => {
        auInfo.textContent = 'Time: 165 sec';
      }, time / 2);
      setTimeout(() => {
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
      setTimeout(() => {
        germanyAsiaL.classList.add('visually-hidden');
      }, time);
    case 2:
      germanyAsiaM.classList.remove('visually-hidden');
      setTimeout(() => {
        germanyAsiaM.classList.add('visually-hidden');
      }, time);
    case 1:
      germanyAsiaS.classList.remove('visually-hidden');
      asInfo.classList.remove('visually-hidden');
      asInfo.textContent = 'Latency: 149';
      setTimeout(() => {
        asInfo.textContent = 'Time: 61 sec';
      }, time / 2);
      setTimeout(() => {
        germanyAsiaS.classList.add('visually-hidden');
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
      setTimeout(() => {
        germanyEuropeL.classList.add('visually-hidden');
      }, time);
    case 2:
      germanyEuropeM.classList.remove('visually-hidden');
      setTimeout(() => {
        germanyEuropeM.classList.add('visually-hidden');
      }, time);
    case 1:
      germanyEuropeS.classList.remove('visually-hidden');
      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 11';
      setTimeout(() => {
        euInfo.textContent = 'Time: 5 sec';
      }, time / 2);
      setTimeout(() => {
        germanyEuropeS.classList.add('visually-hidden');
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
      setTimeout(() => {
        westNaNorthL.classList.add('visually-hidden');
      }, time);
    case 2:
      westNaNorthM.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaNorthM.classList.add('visually-hidden');
      }, time);
    case 1:
      westNaNorthS.classList.remove('visually-hidden');
      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 59';
      setTimeout(() => {
        naInfo.textContent = 'Time: 28 sec';
      }, time / 2);
      setTimeout(() => {
        westNaNorthS.classList.add('visually-hidden');
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
      setTimeout(() => {
        westNaSouthL.classList.add('visually-hidden');
      }, time);
    case 2:
      westNaSouthM.classList.remove('visually-hidden');
      setTimeout(() => {
        westNaSouthM.classList.add('visually-hidden');
      }, time);
    case 1:
      westNaSouthS.classList.remove('visually-hidden');
      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 185';
      setTimeout(() => {
        saInfo.textContent = 'Time: 101 sec';
      }, time / 2);
      setTimeout(() => {
        westNaSouthS.classList.add('visually-hidden');
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
      setTimeout(() => {
        eastNaSouthL.classList.add('visually-hidden');
      }, time);
    case 2:
      eastNaSouthM.classList.remove('visually-hidden');
      setTimeout(() => {
        eastNaSouthM.classList.add('visually-hidden');
      }, time);
    case 1:
      eastNaSouthS.classList.remove('visually-hidden');
      saInfo.classList.remove('visually-hidden');
      saInfo.textContent = 'Latency: 185';
      setTimeout(() => {
        saInfo.textContent = 'Time: 101 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaSouthS.classList.add('visually-hidden');
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
      setTimeout(() => {
        eastNaNorthL.classList.add('visually-hidden');
      }, time);
    case 2:
      eastNaNorthM.classList.remove('visually-hidden');
      setTimeout(() => {
        eastNaNorthM.classList.add('visually-hidden');
      }, time);
    case 1:
      eastNaNorthS.classList.remove('visually-hidden');
      naInfo.classList.remove('visually-hidden');
      naInfo.textContent = 'Latency: 23';
      setTimeout(() => {
        naInfo.textContent = 'Time: 9 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaNorthS.classList.add('visually-hidden');
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
      setTimeout(() => {
        eastNaEuropeL.classList.add('visually-hidden');
      }, time);
    case 2:
      eastNaEuropeM.classList.remove('visually-hidden');
      setTimeout(() => {
        eastNaEuropeM.classList.add('visually-hidden');
      }, time);
    case 1:
      eastNaEuropeS.classList.remove('visually-hidden');
      euInfo.classList.remove('visually-hidden');
      euInfo.textContent = 'Latency: 85';
      setTimeout(() => {
        euInfo.textContent = 'Time: 62 sec';
      }, time / 2);
      setTimeout(() => {
        eastNaEuropeS.classList.add('visually-hidden');
        euInfo.textContent = '';
        euInfo.classList.add('visually-hidden');
      }, time);
      break;
    default:
  }
};
