import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UiState {
  globalColor: string;
  globalColor2: string;
  globalColor3: string;
  channelActive: boolean;
  experienceActiveId: number;
  positionActiveId: number;
  top: number;
  left: number;
  pfpTop: number;
  pfpLeft: number;
  deliveredTop: number;
  deliveredLeft: number;
  pfp2Top: number;
  pfp2Left: number;
  interestsTop: number;
  interestsLeft: number;
  pfp3Top: number;
  pfp3Left: number;
}

const initialState: UiState = {
  globalColor: "#000000",
  globalColor2: "#191818",
  globalColor3: "#2a2727",
  channelActive: false,
  experienceActiveId: 0,
  positionActiveId: 0,
  top: 0,
  left: 0,
  pfpTop: 0,
  pfpLeft: 0,
  deliveredTop: 0,
  deliveredLeft: 0,
  pfp2Top: 0,
  pfp2Left: 0,
  interestsTop: 0,
  interestsLeft: 0,
  pfp3Top: 0,
  pfp3Left: 0,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setGlobalColor: (state, action: PayloadAction<string>) => {
      state.globalColor = action.payload;
    },
    setGlobalColor2: (state, action: PayloadAction<string>) => {
      state.globalColor2 = action.payload;
    },
    setGlobalColor3: (state, action: PayloadAction<string>) => {
      state.globalColor3 = action.payload;
    },
    setChannelActive: (state, action: PayloadAction<boolean>) => {
      state.channelActive = action.payload;
    },
    setExperienceActiveId: (state, action: PayloadAction<number>) => {
      state.experienceActiveId = action.payload;
    },
    setPositionActiveId: (state, action: PayloadAction<number>) => {
      state.positionActiveId = action.payload;
    },
    setTop: (state, action: PayloadAction<number>) => {
      state.top = action.payload;
    },
    setLeft: (state, action: PayloadAction<number>) => {
      state.left = action.payload;
    },
    setPfpTop: (state, action: PayloadAction<number>) => {
      state.pfpTop = action.payload;
    },
    setPfpLeft: (state, action: PayloadAction<number>) => {
      state.pfpLeft = action.payload;
    },
    setDeliveredTop: (state, action: PayloadAction<number>) => {
      state.deliveredTop = action.payload;
    },
    setDeliveredLeft: (state, action: PayloadAction<number>) => {
      state.deliveredLeft = action.payload;
    },
    setPfp2Top: (state, action: PayloadAction<number>) => {
      state.pfp2Top = action.payload;
    },
    setPfp2Left: (state, action: PayloadAction<number>) => {
      state.pfp2Left = action.payload;
    },
    setInterestsTop: (state, action: PayloadAction<number>) => {
      state.interestsTop = action.payload;
    },
    setInterestsLeft: (state, action: PayloadAction<number>) => {
      state.interestsLeft = action.payload;
    },
    setPfp3Top: (state, action: PayloadAction<number>) => {
      state.pfp3Top = action.payload;
    },
    setPfp3Left: (state, action: PayloadAction<number>) => {
      state.pfp3Left = action.payload;
    },
  },
});

export const {
  setGlobalColor,
  setGlobalColor2,
  setGlobalColor3,
  setChannelActive,
  setExperienceActiveId,
  setPositionActiveId,
  setTop,
  setLeft,
  setPfpTop,
  setPfpLeft,
  setDeliveredTop,
  setDeliveredLeft,
  setPfp2Top,
  setPfp2Left,
  setInterestsTop,
  setInterestsLeft,
  setPfp3Top,
  setPfp3Left,
} = uiSlice.actions;

export const selectGlobalColor = (state: RootState) => state.ui.globalColor;

export const selectGlobalColor2 = (state: RootState) => state.ui.globalColor2;

export const selectGlobalColor3 = (state: RootState) => state.ui.globalColor3;

export const selectChannelActive = (state: RootState) => state.ui.channelActive;

export const selectExperienceActiveId = (state: RootState) => state.ui.experienceActiveId;

export const selectPositionActiveId = (state: RootState) => state.ui.positionActiveId;

export const selectTop = (state: RootState) => state.ui.top;

export const selectLeft = (state: RootState) => state.ui.left;

export const selectPfpTop = (state: RootState) => state.ui.pfpTop;

export const selectPfpLeft = (state: RootState) => state.ui.pfpLeft;

export const selectDeliveredTop = (state: RootState) => state.ui.deliveredTop;

export const selectDeliveredLeft = (state: RootState) => state.ui.deliveredLeft;

export const selectPfp2Top = (state: RootState) => state.ui.pfp2Top;

export const selectPfp2Left = (state: RootState) => state.ui.pfp2Left;

export const selectInterestsTop = (state: RootState) => state.ui.interestsTop;

export const selectInterestsLeft = (state: RootState) => state.ui.interestsLeft;

export const selectPfp3Top = (state: RootState) => state.ui.pfp3Top;

export const selectPfp3Left = (state: RootState) => state.ui.pfp3Left;

export default uiSlice.reducer;
