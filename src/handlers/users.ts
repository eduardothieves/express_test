import { Request, Response } from "express-serve-static-core";
import { CreateUserDTO } from "../dtos/users.dto";

const getUsers = (req: Request, res: Response) => {
  res.send([]);
};

const getUserById = (req: Request, res: Response) => {
  res.send({});
};

const createUser = (req: Request<{}, {}, CreateUserDTO>, res: Response) => {
  res.send({});
};

export { getUsers, getUserById, createUser };
