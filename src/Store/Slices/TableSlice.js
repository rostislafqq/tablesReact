import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tables: {},
  isLoaded: false,
  searchValue: '',
};

export const counterSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    getTablesInStore: (state, action) => {
      state.tables = action.payload;
      state.isLoaded = true;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    getIdSortDec: (state) => {
      state.tables.sort((u1, u2) => {
        if (u1.id < u2.id) {
          return 1;
        }
        if (u1.id > u2.id) {
          return -1;
        }
        return 0;
      });
    },
    getIdSortAsc: (state) => {
      state.tables.sort((u1, u2) => {
        if (u1.id > u2.id) {
          return 1;
        }
        if (u1.id < u2.id) {
          return -1;
        }
        return 0;
      });
    },
    getTitleSortDec: (state) => {
      state.tables.sort((u1, u2) => {
        if (u1.title.length < u2.title.length) {
          return 1;
        }
        if (u1.title.length > u2.title.length) {
          return -1;
        }
        return 0;
      });
    },
    getTitleSortAsc: (state) => {
      state.tables.sort((u1, u2) => {
        if (u1.title.length > u2.title.length) {
          return 1;
        }
        if (u1.title.length < u2.title.length) {
          return -1;
        }
        return 0;
      });
    },
    getBodySortAsc: (state) => {
      state.tables.sort((u1, u2) => {
        if (u1.body.length > u2.body.length) {
          return 1;
        }
        if (u1.body.length < u2.body.length) {
          return -1;
        }
        return 0;
      });
    },
    getBodySortDec: (state) => {
      state.tables.sort((u1, u2) => {
        if (u1.body.length < u2.body.length) {
          return 1;
        }
        if (u1.body.length > u2.body.length) {
          return -1;
        }
        return 0;
      });
    },
  },
});

export const {
  getTablesInStore,
  setSearchValue,
  getIdSortDec,
  getIdSortAsc,
  getTitleSortDec,
  getTitleSortAsc,
  getBodySortDec,
  getBodySortAsc,
} = counterSlice.actions;

export default counterSlice.reducer;
