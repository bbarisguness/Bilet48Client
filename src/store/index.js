'use client';
import { configureStore } from "@reduxjs/toolkit";
import buyPageSelectedTicket from "./buyPageSelectedTicket";

const store = configureStore({
    reducer: {
        buyPageSelectedTicket
    }
})

export default store