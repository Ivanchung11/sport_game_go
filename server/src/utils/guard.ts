import { Request, Response, NextFunction } from "express";
// import express, { NextFunction } from "express";
// import { Request, Response } from "express";
export function isLoggedin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // console.log(req.session);
  if (req.session.userId) {
    next();
  } else {
    res.status(400).json("You do not have rights");
  }
}
