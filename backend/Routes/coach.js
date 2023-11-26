import express from "express";
import {getUpdateCoach, getDeleteCoach, getSingleCoach, getAllCoach} from "../Controller/coachController.js";

const router = express.Router();

router.get("/", getAllCoach);
router.get("/:id", getSingleCoach);
router.put("/:id", getUpdateCoach);
router.delete("/:id", getDeleteCoach);

export default router;