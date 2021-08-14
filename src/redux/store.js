// import { configureStore } from "@reduxjs/toolkit";
// import rootReduser from "../redux/slices/todo";
//
// const store = configureStore({
// reducer: rootReduser,
// });
//
// export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReduser from "./slices/todo";

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, rootReduser),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
