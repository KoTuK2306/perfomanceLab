import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreProduct } from "../../mocks";

type AppState = {
  items: StoreProduct[];
  isLoading: boolean;
};

export const initialState: AppState = {
  items: [],
  isLoading: false,
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
  },
});

export const { addItems, changeIsLoading } = appSlice.actions;
export default appSlice.reducer;
