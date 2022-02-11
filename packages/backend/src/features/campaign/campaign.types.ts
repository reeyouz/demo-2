import { IsDate, IsDateString, IsNumber, IsString } from "class-validator";

export class Campaign implements ICampaign {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsNumber()
  Budget: number;

  @IsNumber()
  userId: number;

  constructor(
    id: number,
    name: string,
    startDate: Date,
    endDate: Date,
    Budget: number,
    userId: number
  ) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.Budget = Budget;
    this.userId = userId;
  }
}

export interface ICampaign {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  Budget: number;
  userId: number;
}
