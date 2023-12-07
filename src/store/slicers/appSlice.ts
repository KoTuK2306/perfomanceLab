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
  isOpenInfoAlert: boolean;
  textInfoAlert: string;
  cartItems: Map<number, Omit<StoreProduct, "category">>;
  isOpenSideBar: boolean;
};

export const initialState: AppState = {
  items: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 15,
  currentCategory: Categories.FOOD,
  sorting: Sorting.UNDEFINED,
  isOpenInfoAlert: false,
  textInfoAlert: "",
  cartItems: new Map(),
  isOpenSideBar: false,
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
      state.sorting = Sorting.UNDEFINED;
    },
    changeSorting(state, action: PayloadAction<Sorting>) {
      state.sorting = action.payload;
    },
    changeIsOpenInfoAlert(state, action: PayloadAction<boolean>) {
      state.isOpenInfoAlert = action.payload;
    },
    changeTextInfoAlert(state, action: PayloadAction<string>) {
      state.textInfoAlert = action.payload;
    },
    changeCartItems(
      state,
      action: PayloadAction<Map<number, Omit<StoreProduct, "category">>>
    ) {
      state.cartItems = action.payload;
    },
    changeIsOpenSideBar(state, action: PayloadAction<boolean>) {
      state.isOpenSideBar = action.payload;
    },
  },
});

export const {
  addItems,
  changeIsLoading,
  changeCurrentPage,
  changeCategory,
  changeSorting,
  changeIsOpenInfoAlert,
  changeTextInfoAlert,
  changeCartItems,
  changeIsOpenSideBar,
} = appSlice.actions;
export default appSlice.reducer;
