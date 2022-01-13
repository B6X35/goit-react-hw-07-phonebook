import axios from "axios";

axios.defaults.baseURL = 'https://61dec287fb8dae0017c2e252.mockapi.io';

const path = {
    CONTACTS: '/contacts'
}

export const addContactApi = async (contact) => {
    try {
        const {data} = await axios.post(path.CONTACTS, contact);
        // const dataResponse = {
        //     ...contact,
        //     id: data.name,
        // };
        console.log(data)
        return data;
    } catch (error) {
        throw error.message;
    }
};
console.log(addContactApi)

export const getContactsApi = async () => {
    try {
        const {data} = await axios.get(path.CONTACTS);
        console.log('data :>> ', data);
        return data;
    } catch (error) {
        throw error.message;
    }
};

export const removeContactApi = async (id) => {
    try {
        await axios.delete(path.CONTACTS + '/' + id);
        return id;
    } catch (error) {
        throw error.message
    }
};