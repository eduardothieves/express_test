import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((v) => v.run(req)));

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.array() });
    }
    next();
  };
};

export { validate };
