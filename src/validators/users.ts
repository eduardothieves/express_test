import { body } from "express-validator";

const createUserValidator = [
  body("username", "username dost not empty").notEmpty(),
  body("email", "Invalid email").isEmail(),
  body("password", "The minimum password length is 6 characters").isLength({
    min: 6,
  }),
];

export { createUserValidator };
