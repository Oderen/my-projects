const { createSlice } = require('@reduxjs/toolkit');

export const sideBarSlice = createSlice({
  name: 'sidebar/toggle',
  initialState: { isOpen: false },
  reducers: {
    toggleSideBar: state => {
      state.isOpen = !state.isOpen;
    },
    closeSideBar: state => {
      state.isOpen = false;
    },
  },
});

export const { toggleSideBar, closeSideBar } = sideBarSlice.actions;
