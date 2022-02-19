import { petSlice } from './redux/slices/pet';
import { store } from './redux/store';

const POOP_INTERVAL = 60e3;
const HUNGER_INTERVAL = 90e3;

class PetScheduler {
  private readonly poopInterval = setInterval(() => {
    store.dispatch(petSlice.actions.poop());
  }, POOP_INTERVAL);

  private readonly hungerInterval = setInterval(() => {
    store.dispatch(petSlice.actions.getHungry());
  }, HUNGER_INTERVAL);

  dispose() {
    clearInterval(this.poopInterval);
    clearInterval(this.hungerInterval);
  }
}