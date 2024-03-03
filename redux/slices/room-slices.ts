import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FormationProps {
  formationState: string;
  playerState: string;
}

const formationInitialState: FormationProps = {
  formationState: "4-3-3-1",
  playerState: "",
};

const playerInitialState: FormationProps = {
  formationState: "4-3-3-1",
  playerState: "",
};

export const formationSlice = createSlice({
  name: "formation",
  initialState: formationInitialState,
  reducers: {
    saveFormation: (state, action: PayloadAction<string>) => {
      state.formationState = action.payload;
    },
  },
});

export const playerSlice = createSlice({
  name: "player",
  initialState: playerInitialState,
  reducers: {
    savePlayer: (state, action: PayloadAction<string>) => {
      state.playerState = action.payload;
    },
  },
});

export const { saveFormation } = formationSlice.actions;
export const { savePlayer } = playerSlice.actions;

export default {
  formation: formationSlice.reducer,
  player: playerSlice.reducer,
};
