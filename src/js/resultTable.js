import { store } from './store';
import { getRefs } from './getRefs';
import { addTableToByte, addTableToObject } from './templatesForTable';

const { modalEl, byteList, objectList, startAgain, topText } = getRefs;

const byteCloudTable = sortedUsers => {
  const byteCloudStore = {
    sa: {
      region: 'South America',
      stars: 3,
      latency: 185,
      time: 101,
      streaming: '1080p Full HD',
    },
    na: {
      region: 'North America',
      stars: 5,
      latency: 23,
      time: 9,
      streaming: '4K/2160p Ultra HD',
    },
    eu: {
      region: 'Europe',
      stars: 5,
      latency: 11,
      time: 5,
      streaming: '4K/2160p Ultra HD',
    },
    as: {
      region: 'Asia',
      stars: 5,
      latency: 73,
      time: 41,
      streaming: '4K/2160p Ultra HD',
    },
    au: {
      region: 'Oceania',
      stars: 4,
      latency: 93,
      time: 63,
      streaming: '4K/2160p Ultra HD',
    },
  };

  if (!store.asiaServer) {
    byteCloudStore.au.stars = 1;
    byteCloudStore.au.latency = 266;
    byteCloudStore.au.time = 165;
    byteCloudStore.au.streaming = '480p';

    byteCloudStore.as.stars = 4;
    byteCloudStore.as.latency = 149;
    byteCloudStore.as.time = 61;
    byteCloudStore.as.streaming = '4K/2160p Ultra HD';
  }

  if (!store.europeServer) {
    byteCloudStore.eu.stars = 4;
    byteCloudStore.eu.latency = 85;
    byteCloudStore.eu.time = 59;
    byteCloudStore.eu.streaming = '4K/2160p Ultra HD';
  }

  if (!store.naSecondServer) {
    byteCloudStore.na.stars = 5;
    byteCloudStore.na.latency = 59;
    byteCloudStore.na.time = 28;
    byteCloudStore.na.streaming = '4K/2160p Ultra HD';
  }

  sortedUsers.forEach(elem => {
    switch (elem.place) {
      case 'sa':
        addTableToByte(byteCloudStore.sa);
        break;

      case 'na':
        addTableToByte(byteCloudStore.na);
        break;

      case 'eu':
        addTableToByte(byteCloudStore.eu);
        break;

      case 'as':
        addTableToByte(byteCloudStore.as);
        break;

      case 'au':
        addTableToByte(byteCloudStore.au);
        break;
      default:
        break;
    }
  });

  byteList.innerHTML = '';
  byteList.insertAdjacentHTML('beforeend', store.byteCloudHtml);
};

const objectTable = sortedUsers => {
  const objectStore = {
    sa: {
      region: 'South America',
      stars: 3,
      latency: 214,
      time: 92,
      streaming: '1080p Full HD',
    },
    na: {
      region: 'North America',
      stars: 4,
      latency: 100,
      time: 70,
      streaming: '4K/2160p Ultra HD',
    },
    eu: {
      region: 'Europe',
      stars: 5,
      latency: 11,
      time: 5,
      streaming: '4K/2160p Ultra HD',
    },
    as: {
      region: 'Asia',
      stars: 4,
      latency: 149,
      time: 61,
      streaming: '4K/2160p Ultra HD',
    },
    au: {
      region: 'Oceania',
      stars: 1,
      latency: 266,
      time: 165,
      streaming: '480p',
    },
  };

  if (store.blueServer === 'na1') {
    objectStore.na.stars = 5;
    objectStore.na.latency = 59;
    objectStore.na.time = 28;
    objectStore.na.streaming = '4K/2160p Ultra HD';

    objectStore.sa.stars = 3;
    objectStore.sa.latency = 185;
    objectStore.sa.time = 101;
    objectStore.sa.streaming = '1080p Full HD';

    objectStore.eu.stars = 4;
    objectStore.eu.latency = 141;
    objectStore.eu.time = 60;
    objectStore.eu.streaming = '4K/2160p Ultra HD';

    objectStore.as.stars = 1;
    objectStore.as.latency = 270;
    objectStore.as.time = 170;
    objectStore.as.streaming = '480p';

    objectStore.au.stars = 1;
    objectStore.au.latency = 367;
    objectStore.au.time = 265;
    objectStore.au.streaming = '480p';
  }

  if (store.blueServer === 'na2') {
    objectStore.sa.stars = 3;
    objectStore.sa.latency = 185;
    objectStore.sa.time = 101;
    objectStore.sa.streaming = '1080p Full HD';

    objectStore.na.stars = 5;
    objectStore.na.latency = 23;
    objectStore.na.time = 9;
    objectStore.na.streaming = '4K/2160p Ultra HD';

    objectStore.eu.stars = 4;
    objectStore.eu.latency = 85;
    objectStore.eu.time = 62;
    objectStore.eu.streaming = '4K/2160p Ultra HD';

    objectStore.as.stars = 3;
    objectStore.as.latency = 232;
    objectStore.as.time = 140;
    objectStore.as.streaming = '750p HD Ready';

    objectStore.au.stars = 3;
    objectStore.au.latency = 207;
    objectStore.au.time = 110;
    objectStore.au.streaming = '750p HD Ready';
  }

  if (store.blueServer === 'as') {
    objectStore.eu.stars = 3;
    objectStore.eu.latency = 185;
    objectStore.eu.time = 101;
    objectStore.eu.streaming = '1080p Full HD';

    objectStore.na.stars = 3;
    objectStore.na.latency = 226;
    objectStore.na.time = 113;
    objectStore.na.streaming = '1080p Full HD';

    objectStore.sa.stars = 2;
    objectStore.sa.latency = 250;
    objectStore.sa.time = 125;
    objectStore.sa.streaming = '750p HD Ready';

    objectStore.as.stars = 5;
    objectStore.as.latency = 73;
    objectStore.as.time = 41;
    objectStore.as.streaming = '4K/2160p Ultra HD';

    objectStore.au.stars = 4;
    objectStore.au.latency = 93;
    objectStore.au.time = 63;
    objectStore.au.streaming = '4K/2160p Ultra HD';
  }

  sortedUsers.forEach(elem => {
    switch (elem.place) {
      case 'sa':
        addTableToObject(objectStore.sa);
        break;

      case 'na':
        addTableToObject(objectStore.na);
        break;

      case 'eu':
        addTableToObject(objectStore.eu);
        break;

      case 'as':
        addTableToObject(objectStore.as);
        break;

      case 'au':
        addTableToObject(objectStore.au);
        break;
      default:
        break;
    }
  });

  objectList.innerHTML = '';
  objectList.insertAdjacentHTML('beforeend', store.objectStorageHtml);
};

export const showTable = time => {
  const sortedByUsers = [
    { place: 'na', users: store.nAmericaUsers },
    { place: 'sa', users: store.sAmericaUsers },
    { place: 'eu', users: store.europeUsers },
    { place: 'as', users: store.asiaUsers },
    { place: 'au', users: store.australiaUsers },
  ]
    .sort((a, b) => (a.users > b.users ? -1 : 1))
    .filter(item => item.users !== 0);

  byteCloudTable(sortedByUsers);
  objectTable(sortedByUsers);

  setTimeout(() => {
    modalEl.classList.remove('visually-hidden');
    topText.textContent = 'Do you want to';
    startAgain.classList.remove('visually-hidden');
  }, time);
};
