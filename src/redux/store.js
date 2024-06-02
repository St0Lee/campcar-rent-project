import { configureStore } from "@reduxjs/toolkit";

import { advertsApi } from "./adverts/advertsOperations";

export const store = configureStore({
    reducer: {[advertsApi.reducerPath]: advertsApi.reducer},
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(), advertsApi.middleware],
});

