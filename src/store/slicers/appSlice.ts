import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories, Sorting } from "../../enums";
import { StoreProduct } from "../../mocks";

type AppState = {
  items: StoreProduct[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  currentCategory: Categories;
  sorting: Sorting;
};

export const initialState: AppState = {
  items: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 15,
  currentCategory: Categories.FOOD,
  sorting: Sorting.NAME_ASC,
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
    changeSorting(state, action: PayloadAction<Sorting>) {
      state.sorting = action.payload;
    },
  },
});

export const {
  addItems,
  changeIsLoading,
  changeCurrentPage,
  changeCategory,
  changeSorting,
} = appSlice.actions;
export default appSlice.reducer;
