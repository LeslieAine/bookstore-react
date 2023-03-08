import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const newState = { ...state }; // make a copy of state object
      newState.books = state.books.filter((book) => book.id !== action.payload);
      return newState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
