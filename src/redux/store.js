import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./barSlice";

export const store = configureStore({
    reducer: {
        barSlice: barSlice
    }
});