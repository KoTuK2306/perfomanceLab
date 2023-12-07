import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slicers/appSlice";

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: ["app/changeCartItems"],
    ignoredPaths: ["app.cartItems"],
  },
};

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
