import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const selectNameFilter = (state) => state.filters.name;

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export { selectNameFilter };

export default filtersSlice.reducer;
