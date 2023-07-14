import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/feaures/userSlice";
export default configureStore({
    reducer:{
        user:userReducer,
    }
})