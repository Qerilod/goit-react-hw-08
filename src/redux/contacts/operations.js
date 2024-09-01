import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const getAuthToken = (state) => state.auth.token;

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getAuthToken(state);

    if (!token) {
      return thunkAPI.rejectWithValue("No auth token available");
    }

    try {
      const { data } = await axios.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getAuthToken(state);

    if (!token) {
      return thunkAPI.rejectWithValue("No auth token available");
    }

    try {
      const { data } = await axios.post("/contacts", newContact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getAuthToken(state);

    if (!token) {
      return thunkAPI.rejectWithValue("No auth token available");
    }

    try {
      await axios.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
