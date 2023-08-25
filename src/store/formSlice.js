
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("user/addUser", async (values) => {
    try {
        const response = await axios.post("http://test", {
            email: values.email,
            name: values.name,
            mobile: values.mobile
        });
        return response.data; // Assuming the response contains user data
    } catch (error) {
        throw error;
    }
});
export const getUser = createAsyncThunk("user/getUser", async (userId) => {
    try {
        const response = await axios.get(`http://test/users/${userId}`);
        return response.data; // Assuming the response contains user data
    } catch (error) {
        throw error;
    }
});
const formSlice = createSlice({
    name: "form",
    initialState: {
        loading: false,
        formData: {},
        userData: null,
        error: "",
        isSuccess: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state) => {
            state.loading = true;
            state.error = "";
            state.isSuccess = false;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
            state.isSuccess = true;
            state.formData = {};
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.userData = null;
            state.error = action.error.message;
        });
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.userData = null;
            state.error = action.error.message;
        });
    }
});

export default formSlice.reducer;
