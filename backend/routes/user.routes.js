import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
const userRouter = Router(); //instance of Router

userRouter.get("/", getUsers);
userRouter.get("/getUser", authorize, getUser);
// userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ title: "CREATE new User " }));
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE User " }));
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE User " }));
export default userRouter;
