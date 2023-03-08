import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      const newState = { ...state }; // make a copy of state object
      newState.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
      return newState;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
