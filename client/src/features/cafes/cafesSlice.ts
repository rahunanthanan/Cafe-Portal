import type { PayloadAction } from "@reduxjs/toolkit";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from 'app/store';
import { Cafe } from "schema/Cafe";

export interface CafesState {
  loading: boolean,
  error: string | null,
  items: Cafe[];
}

const SLICE_NAME = "cafes";

const initialState: CafesState = {
  loading: true,
  error: null,
  items: []
};

export const fetchCafes = createAction(`${SLICE_NAME}/fetchCafes`);

export const fetchCafeById = createAction(`${SLICE_NAME}/fetchCafeById`);

export const cafesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    fetchCafesPending: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchCafesFullfield: (state, action: PayloadAction<Cafe[]>) => {
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    },
    fetchCafesRejected: (state) => {
      return {
        ...state,
        loading: false,
        error: "Fetch cafes failed.",
      };
    },
    fetchCafeByIdPending: (state) => {
      return state;
    },
    fetchCafeByIdFullfield: (state, action: PayloadAction<Cafe>) => {
      return {
        ...state,
        items: state.items.map((item: Cafe) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        }),
      };
    },
    fetchCafeByIdRejected: (state) => {
      return state;
    },
  },
});

export const {
  fetchCafesPending,
  fetchCafesFullfield,
  fetchCafesRejected,
  fetchCafeByIdPending,
  fetchCafeByIdFullfield,
  fetchCafeByIdRejected,
} = cafesSlice.actions;

export default cafesSlice.reducer;
