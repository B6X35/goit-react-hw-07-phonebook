import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from "../../utils/mockApi";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
} from "./phoneAction";

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());

  addContactApi(contact)
    .then((contact) => dispatch(addContactSuccess(contact)))
    .catch((error) => dispatch(addContactError(error)));
};

export const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());

  getContactsApi()
    .then((contacts) => {
      console.log("contacts :>> ", contacts);
      dispatch(getContactsSuccess(contacts));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

// export const getContacts = createAsyncThunk(
//     "getContacts",
//     dispatch(getContactsRequest()),
//     async (thunkApi) => {
//         try {
//             const contacts = await getContactsApi();
//             dispatch(getContactsSuccess(contacts))
//             console.log("contacts :>> ", contacts);
//             return contacts;
//         } catch (error) {
//             dispatch(getContactsError(error))
//             return thunkApi.rejectWithValue(error)
//         }
//     }
// )

export const removeContact = createAsyncThunk(
  "removeContact",
  async (id, thunkApi) => {
    try {
      const respId = await removeContactApi(id);
      return respId;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
