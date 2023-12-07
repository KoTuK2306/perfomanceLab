import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreProduct } from "../../mocks";
import { initialState } from "../store";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<StoreProduct[]>) {
      state.items = action.payload;
    },
  },
});

export const { addItems } = appSlice.actions;
export default appSlice.reducer;
