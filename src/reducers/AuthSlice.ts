import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  loading: boolean;
  error: string | null;
  role: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  loading: false,
  error: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      sessionStorage.setItem("accessToken", action.payload);
    },
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
  },
});

export const { setToken, setRole } = authSlice.actions;
export default authSlice.reducer;
