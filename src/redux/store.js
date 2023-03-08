import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './categories/categoriesSlice';
import booksSlice from './books/booksSlice';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    books: booksSlice,
  },
});

export default store;
