import express from "express";
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js";

const Router = express.Router();

Router.post("/auth",authUser);
Router.post("/register",registerUser);
Router.post("/logout",logoutUser);
Router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default Router;