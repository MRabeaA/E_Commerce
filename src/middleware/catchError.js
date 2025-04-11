import { AppError } from "../utilites/ErrorInhertance.js";


export const catchError = (callFun) => {
  return (req, res, next) => {
    callFun(req, res, next).catch((err) => {
      next(new AppError(err,500));
    });
  };
};
