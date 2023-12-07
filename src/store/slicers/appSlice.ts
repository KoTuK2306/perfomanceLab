import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreProduct } from "../../mocks";

type AppState = {
  items: StoreProduct[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
};

export const initialState: AppState = {
  items: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 17,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<StoreProduct[]>) {
      state.items = action.payload;
    },
    changeIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { addItems, changeIsLoading, changeCurrentPage } =
  appSlice.actions;
export default appSlice.reducer;
