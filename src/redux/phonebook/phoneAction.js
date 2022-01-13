import { createAction } from "@reduxjs/toolkit";
import uniqid from "uniqid";

export const addContact = createAction('contact/add', (contact) => {
    return {
        payload: {
            ...contact,
            id: uniqid.time()
        }
    }
})

export const removeContact = createAction('contact/remove');

// export const getContacts = createAction('contacts/get');

export const addContactRequest = createAction('addContactRequest');
export const addContactSuccess = createAction('addContactSuccess');
export const addContactError = createAction('addContactError');

export const getContactsRequest =  createAction('getContactsRequest');
export const getContactsSuccess =  createAction('getContactsSuccess');
export const getContactsError =  createAction('getContactsError');