import express from "express";
import { NextFunction, Request, Response } from "express-serve-static-core";
import authRouters from "./routes/auth";
import usersRouters from "./routes/users";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET || ""));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 15 * 60 * 1000, // 15 min,
      signed: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRouters);
app.use("/api/users", usersRouters);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
