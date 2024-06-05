import { Router } from "express";
import {
  getAllCharacters,
  getCharacterById,
} from "../controllers/characterController";

const router = Router();

router.get("/characters", getAllCharacters);
router.get("/character/:id", getCharacterById);

export default router;
