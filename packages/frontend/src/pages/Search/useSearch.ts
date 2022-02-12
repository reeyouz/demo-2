import React from "react";
import {
  updateEndDate,
  updateKeyword,
  updateStartDate,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export function useSearch() {
  const form = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(updateKeyword(e.target.value));
  };

  const handleStartDateChange = (startDate: string | null | undefined) => {
    dispatch(
      updateStartDate(
        typeof startDate == "string"
          ? startDate
          : (startDate as any) instanceof Date
          ? (startDate as any).toISOString()
          : startDate
      )
    );
  };

  const handleEndDateChange = (endDate: string | null | undefined) => {
    dispatch(
      updateEndDate(
        typeof endDate == "string"
          ? endDate
          : (endDate as any) instanceof Date
          ? (endDate as any).toISOString()
          : endDate
      )
    );
  };

  return { form, handleNameChange, handleStartDateChange, handleEndDateChange };
}
