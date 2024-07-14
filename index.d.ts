import * as express from "express-serve-static-core";

declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
      email: string;
    }
  }
}
