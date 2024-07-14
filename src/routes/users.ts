import { Router } from "express";
import { createUser, getUserById, getUsers } from "../handlers/users";
import { createUserValidator } from "../validators/users";
import { validate } from "../middlewares/validate";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", validate(createUserValidator), createUser);

export default router;
