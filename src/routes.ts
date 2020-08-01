import { Router, request } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export { router };