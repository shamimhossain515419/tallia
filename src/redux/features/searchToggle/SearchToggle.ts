import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SearchBar: false,
};

export const SearchToggle = createSlice({
  initialState,
  name: "search-toggle",
  reducers: {
    toggle_search: (state) => {
      state.SearchBar = !state.SearchBar;
    },
  },
});

export const { toggle_search } = SearchToggle.actions;

export default SearchToggle.reducer;
