import express from "express";
import {
  createTicket,
  getTickets,
  updateTicket
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", createTicket);
router.get("/", getTickets);
router.patch("/:id", updateTicket);

export default router;