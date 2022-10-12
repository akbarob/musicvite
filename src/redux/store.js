import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";
import playReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
