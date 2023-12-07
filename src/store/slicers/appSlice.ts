import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories, StoreProduct } from "../../mocks";

type AppState = {
  items: StoreProduct[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  currentCategory: Categories;
};

export const initialState: AppState = {
  items: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 15,
  currentCategory: Categories.FOOD,
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
    changeCategory(state, action: PayloadAction<Categories>) {
      state.currentCategory = action.payload;
      state.currentPage = 1;
    },
  },
});

export const { addItems, changeIsLoading, changeCurrentPage, changeCategory } =
  appSlice.actions;
export default appSlice.reducer;
