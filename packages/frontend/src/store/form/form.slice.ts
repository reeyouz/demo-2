import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  startDate?: string | undefined | null;
  endDate?: string | undefined | null;
  name?: string;
}

const initialState: FormState = {
  startDate: null,
  endDate: null,
  name: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    updateStartDate: (state, action: PayloadAction<FormState["startDate"]>) => {
      state.startDate = action.payload;
    },
    updateEndDate: (state, action: PayloadAction<FormState["endDate"]>) => {
      state.endDate = action.payload;
    },
    updateKeyword: (state, action: PayloadAction<FormState["name"]>) => {
      state.name = action.payload;
    },
  },
});

export const { updateStartDate, updateEndDate, updateKeyword, reset } =
  formSlice.actions;

export const formReducer = formSlice.reducer;
