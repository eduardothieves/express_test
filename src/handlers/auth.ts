import { Request, Response } from "express-serve-static-core";

const doAuth = (req: Request, res: Response) => {
  res.status(200).send({ message: "Login successfull.", user: req.user });
};

const getAuthStatus = (req: Request, res: Response) => {
  res.status(200).send(req.user);
};

const doLogout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) throw err;
    res.status(200).send({ error: "Logout succesfull." });
  });
};

export { doAuth, getAuthStatus, doLogout };
