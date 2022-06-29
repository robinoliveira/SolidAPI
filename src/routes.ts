import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const route = Router();

route.post("/user", (req, res) => {
  return createUserController.handle(req, res);
});

export { route };
