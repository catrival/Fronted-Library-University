import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './features/api/bookSlice';
import { loanSlice } from './features/api/loanSlice';
import { studentsSlice } from './features/api/studentSlice';
import authReducer from './features/context/authSlice'; // Cambia esto

const store = configureStore({
    reducer: {
        [studentsSlice.reducerPath]: studentsSlice.reducer,
        [bookSlice.reducerPath]: bookSlice.reducer,
        [loanSlice.reducerPath]: loanSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(studentsSlice.middleware)
            .concat(bookSlice.middleware)
            .concat(loanSlice.middleware),
});

export default store;
