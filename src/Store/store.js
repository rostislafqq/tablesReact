import { configureStore } from '@reduxjs/toolkit';
import table from './Slices/TableSlice';
export const store = configureStore({
  reducer: {
    table,
  },
});
