import { createSlice } from '@reduxjs/toolkit';

export const isNavActiveSlice = createSlice({
  name: 'isNavActive',
  initialState: {
    isImgNavActive: false,
    isMovieNavActive: false,
    isPhonebookNavActive: false,
  },
  reducers: {
    changeImgNavStatus: state => {
      return {
        isImgNavActive: !state.isImgNavActive,
        isMovieNavActive: false,
        isPhonebookNavActive: false,
      };
    },
    changeMovieNavStatus: state => {
      return {
        isImgNavActive: false,
        isMovieNavActive: !state.isMovieNavActive,
        isPhonebookNavActive: false,
      };
    },
    changePhonebookNavStatus: state => {
      return {
        isImgNavActive: false,
        isMovieNavActive: false,
        isPhonebookNavActive: !state.isPhonebookNavActive,
      };
    },
    resetLinks: () => {
      return {
        isImgNavActive: false,
        isMovieNavActive: false,
        isPhonebookNavActive: false,
      };
    },
  },
});

export const {
  changeImgNavStatus,
  changeMovieNavStatus,
  changePhonebookNavStatus,
  resetLinks,
} = isNavActiveSlice.actions;
