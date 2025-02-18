import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  surah: 1,
  ayat: 1,
};

const navigation = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSurah: (state, action) => {
      state.surah = action.payload;
    },
    setAyat: (state, action) => {
      state.ayat = action.payload;
    },
  },
});

export const { setSurah, setAyat } = navigation.actions;
export default navigation.reducer;
