import { createSlice } from '@reduxjs/toolkit';

export interface PetSliceState {
  hunger: number;
  health: number;
  poops: number;
}

export const MAX_HEALTH = 5;
export const MAX_HUNGER = 5;
export const MAX_POOPS = 5;

const petSlice = createSlice({
  name: 'pet',
  initialState: {
    hunger: 0,
    health: 0,
    poops: 0,
  },
  reducers: {
    feed: (state) => {
      if (state.hunger < MAX_HUNGER) {
        state.hunger += 1;
      }
    },
    getHungry: (state) => {
      if (state.health > 0) {
        state.health -= 1;
      }
    },
    heal: (state) => {
      if (state.health < MAX_HEALTH) {
        state.health += 1;
      }
    },
    getSick: (state) => {
      if (state.health > 0) {
        state.health -= 1;
      }
    },
    poop: (state) => {
      if (state.poops < MAX_POOPS) {
        state.poops += 1;
      }
    },
    cleanUp: (state) => {
      state.poops = 0;
    },
  }
});

export { petSlice };
