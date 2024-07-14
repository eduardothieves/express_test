import { Router } from "express";
import { validate } from "../middlewares/validate";
import { authValidator } from "../validators/auth";
import { doAuth, doLogout, getAuthStatus } from "../handlers/auth";
import passport from "passport";
import "./../strategies/local-strategy";
import { isAuthenticated } from "../middlewares/auth";

const router = Router();

router.post(
  "/",
  validate(authValidator),
  passport.authenticate("local"),
  doAuth
);
router.post("/logout", isAuthenticated, doLogout);
router.get("/status", isAuthenticated, getAuthStatus);

export default router;
