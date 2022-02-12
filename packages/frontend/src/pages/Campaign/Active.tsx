import React, { CSSProperties } from "react";
import { Campaign } from "../../store";

const today = new Date();

type ActiveProps = Pick<Campaign, "startDate" | "endDate">;
export function Active(props: ActiveProps) {
  let { startDate, endDate } = props;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const isActive = today >= start && today <= end;

  const getStyles = (): CSSProperties => {
    return {
      fontWeight: "bold",
      color: isActive ? "green" : "red",
    };
  };

  return <span style={getStyles()}>{isActive ? "ACTIVE" : "INACTIVE"}</span>;
}
