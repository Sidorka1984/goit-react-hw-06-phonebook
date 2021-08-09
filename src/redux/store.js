// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { rootReduser } from "../reducers";
import todo from "../redux/slices/todo";

// const store = createStore(rootReduser, devToolsEnhancer());
const rootReducer = {
  todo,
};
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
//
// import logger from "redux-logger";
// import {
// persistStore,
// persistReducer,
// FLUSH,
// REHYDRATE,
// PAUSE,
// PERSIST,
// PURGE,
// REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import contactsReducer from "../redux/reducers/todo";
//
// const persistConfig = {
// key: "contacts",
// storage,
// blacklist: ["filter"],
// };

// const middleware = [
//   ...getDefaultMiddleware({
// serializableCheck: {
//   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// },
//   }),
//   logger,
// ];

// export const store = configureStore({
// reducer: {
// contacts: persistReducer(persistConfig, contactsReducer),
// },
// devTools: process.env.NODE_ENV === "development",
// middleware: getDefaultMiddleware({
// serializableCheck: {
// ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
// }
// })
// });
//
// export const persistor = persistStore(store);
