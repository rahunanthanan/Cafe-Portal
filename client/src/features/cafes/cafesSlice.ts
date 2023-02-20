import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Cafe } from "schema/Cafe";

export interface CafesState {
  cafes: Cafe[];
}

const initialState: CafesState = {
  cafes: []
};

export const cafesSlice = createSlice({
  name: "cafes",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCafes: (state, action: PayloadAction<Cafe[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cafes = action.payload;
    }
  },
});

export const { setCafes } = cafesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCafes = (state: RootState) => state.cafes.cafes;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number) =>
  (dispatch, getState) => {
    // 
  };

export default cafesSlice.reducer;
