import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { campaignReducer, formReducer } from ".";

export function getStore() {
  return configureStore({
    reducer: {
      campaign: campaignReducer,
      form: formReducer,
    },
  });
}

export const store = getStore();

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
