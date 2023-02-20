import { RootState } from "app/store";

export const selectCafesLoading = (state: RootState) => state.cafes.loading;

export const selectCafes = (state: RootState) => state.cafes.items;

export const selectCafesError = (state: RootState) => state.cafes.error;
