import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//Type of data for user
export interface UserState {
  id: number;
  username: string;
  email: string;
  profileImage: string;
  // address: string,
}

//The initial state
const initialState: UserState = {
  id: 0,
  username: "",
  email: "",
  profileImage: "",
};

// console.log(initialState);

///Created action which can called
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<object>) => {
      return {
        // ...state,
        ...action.payload,
      };
    },

    //write more actions here if needed
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
