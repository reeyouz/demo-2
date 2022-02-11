import { plainToInstance } from "class-transformer";
import { validateSync, isDateString, ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { Campaign } from ".";

export function validatePost(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  let error: ValidationError[] = [];
  if (Array.isArray(body)) {
    body.forEach((record) => {
      error.push(...validateSync(plainToInstance(Campaign, record)));
    });
  } else if (typeof body == "object") {
    error.push(...validateSync(plainToInstance(Campaign, body)));
  }
  if (error.length > 0) {
    return res.status(400).send(error);
  }
  next();
}

export function validateQuery(req: Request, res: Response, next: NextFunction) {
  const { startDate, endDate } = req.query;
  if (
    (startDate !== undefined && !isDateString(startDate)) ||
    (endDate !== undefined && !isDateString(endDate))
  ) {
    return res.status(400).send("Invalid date formats in query!");
  }
  next();
}
