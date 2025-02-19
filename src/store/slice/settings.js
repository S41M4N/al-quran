import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autoNext: false,
  autoPlay: false,
  showBangla: true,
  showEnglish: true,
  showBanglaTafsir: false,
  arabicFontSize: "32px",
  banglaFontSize: "20px",
  banglaTafsirFontSize: "18px",
  englishFontSize: "20px",
};

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setAutoNext: (state, action) => {
      state.autoNext = action.payload;
    },
    setAutoPlay: (state, action) => {
      state.autoPlay = action.payload;
    },
    setShowBangla: (state, action) => {
      state.showBangla = action.payload;
    },
    setShowEnglish: (state, action) => {
      state.showEnglish = action.payload;
    },
    setShowBanglaTafsir: (state, action) => {
      state.showBanglaTafsir = action.payload;
    },
    setArabicFontSize: (state, action) => {
      state.arabicFontSize = action.payload;
    },
    setBanglaFontSize: (state, action) => {
      state.banglaFontSize = action.payload;
    },
    setBanglaTafsirFontSize: (state, action) => {
      state.banglaTafsirFontSize = action.payload;
    },
    setEnglishFontSize: (state, action) => {
      state.englishFontSize = action.payload;
    },
  },
});

export const {
  setAutoNext,
  setAutoPlay,
  setShowBangla,
  setShowEnglish,
  setShowBanglaTafsir,
  setArabicFontSize,
  setBanglaFontSize,
  setBanglaTafsirFontSize,
  setEnglishFontSize,
} = settings.actions;
export default settings.reducer;
