import {configureStore} from "@reduxjs/toolkit";
import formSlice from "../store/formSlice";

 const store= configureStore({
    reducer: {
        form: formSlice,

    }
})
export  default store;