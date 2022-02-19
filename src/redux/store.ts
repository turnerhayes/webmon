import { configureStore } from '@reduxjs/toolkit';

import { petSlice, PetSliceState } from './slices/pet';

export interface State {
  pet: PetSliceState;
}

const store = configureStore({
  reducer: {
    pet: petSlice.reducer,
  },
});

export { store };