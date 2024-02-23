import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/user-slices";

export const store = configureStore({
  reducer: {
    user: userSlices,
  },
});
