import { body } from "express-validator";

const authValidator = [
  body("username", "Username does no be empty.").notEmpty(),
  body("password", "Passsword must contain at least 6 characters.").isLength({
    min: 6,
  }),
];

export { authValidator };
