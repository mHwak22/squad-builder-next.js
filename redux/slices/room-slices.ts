import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FormationProps {
  formationState: string;
}

const initialState: FormationProps = {
  formationState: "4-3-3-1",
};

export const formationSlice = createSlice({
  name: "formation",
  initialState,
  reducers: {
    saveFormation: (state, action: PayloadAction<string>) => {
      // Update the formationState property of the state object
      state.formationState = action.payload;
    },
  },
});

export const { saveFormation } = formationSlice.actions;
export default formationSlice.reducer;
