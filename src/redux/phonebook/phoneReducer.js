import { createSlice } from "@reduxjs/toolkit";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
} from "./phoneAction";
import { removeContact } from "./phoneOperations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addContactError]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [addContactRequest]: (state) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [addContactSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: [...state.items, payload],
    }),
    [getContactsError]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [getContactsRequest]: (state) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getContactsSuccess]: (state, { payload }) => {
      console.log("payload :>> ", payload);
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    },
    [removeContact.pending]: (state) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: state.items.filter(({ id }) => id !== payload),
    }),
    [removeContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default contactSlice.reducer;
