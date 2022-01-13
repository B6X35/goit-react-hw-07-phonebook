import { configureStore, combineReducers } from "@reduxjs/toolkit";
import phoneReducer from "./phonebook/phoneReducer";
import filterReducer from "./filter/filterReducer";

// const middlewareTransformContactsObj = (store) => (next) => (action) => {
//   if (action.type === 'getContactsSuccess') {
//     const payload = Object.entries(action.payload).map(([id, data]) => ({
//       ...data,
//       id,
//     }));
//     // console.log('payload >>>>> ' payload);
//     action.payload = payload;
//   }
//   next(action);
// };

const rootReducer = combineReducers({
  contacts: phoneReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;