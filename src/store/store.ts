import { configureStore } from "@reduxjs/toolkit";
import { StoreProduct } from "../mocks";
import appSlice from "./slicers/appSlice";

type AppState = {
  items: StoreProduct[];
};

export const initialState: AppState = {
  items: [],
};

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
