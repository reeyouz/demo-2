import React, { useState } from "react";

export interface SearchForm {
  startDate?: string | undefined | null;
  endDate?: string | undefined | null;
  name?: string;
}

const initialFormValue: SearchForm = {
  startDate: null,
  endDate: null,
  name: "",
};

export function useSearch(initial?: SearchForm) {
  const [form, setForm] = useState<SearchForm>(initial ?? initialFormValue);

  React.useEffect(() => {
    console.log(form);
  }, [form]);

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleStartDateChange = (startDate: string | null | undefined) => {
    setForm((prev) => ({
      ...prev,
      startDate,
    }));
  };

  const handleEndDateChange = (endDate: string | null | undefined) => {
    setForm((prev) => ({
      ...prev,
      endDate,
    }));
  };

  return { form, handleNameChange, handleStartDateChange, handleEndDateChange };
}
