import { Campaign } from ".";
import { daysFromToday } from "../../shared";

export const sample_campaigns: Campaign[] = [
  {
    id: 1,
    name: "Duke 350 Campaign",
    Budget: 12000,
    startDate: new Date(),
    endDate: daysFromToday(12),
    userId: 1,
  },
  {
    id: 2,
    name: "Monster Energy",
    Budget: 35000,
    startDate: daysFromToday(-4),
    endDate: daysFromToday(8),
    userId: 2,
  },
  {
    id: 3,
    name: "Tokyo Olympics",
    Budget: 3200000,
    startDate: daysFromToday(2),
    endDate: daysFromToday(24),
    userId: 3,
  },
  {
    id: 4,
    name: "HP Smartwatch",
    Budget: 23000,
    startDate: daysFromToday(-5),
    endDate: daysFromToday(11),
    userId: 4,
  },
];
