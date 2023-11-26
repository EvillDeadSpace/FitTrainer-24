import express from "express";
import {getUpdateUser, getDeliteUser, getSignelUser, getAllUser} from "../Controller/userController.js";

const router = express.Router();


router.get("/", getAllUser);
router.get("/:id", getSignelUser);
router.put("/:id", getUpdateUser);
router.delete("/:id", getDeliteUser);

export default router;