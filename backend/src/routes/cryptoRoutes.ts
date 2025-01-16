import { Router } from "express";
import { fetchPrice, createAlert } from "../controllers/cryptoController";

const router = Router();

router.get("/:crypto", fetchPrice);
router.post("/alerts", createAlert);

export default router;
