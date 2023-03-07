import { store } from './store';
import { getRefs } from './getRefs';

const { startTest } = getRefs;

const startTestHandler = () => {
  if (store.numberOfServers < 2) {
    return;
  }

  if (store.numberOfServers === 3) {
  }
};

startTest.addEventListener('click', startTestHandler);
