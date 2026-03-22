import Ticket from "../models/Ticket.js";

// Create ticket
export const createTicket = async (req, res, next) => {
  try {
    const { subject, message, priority } = req.body;

    if (!subject || !message || !priority) {
      return res.status(400).json({ message: "All fields required" });
    }

    const ticket = await Ticket.create({ subject, message, priority });

    res.status(201).json(ticket);

  } catch (error) {
    next(error);
  }
};

// Get all tickets
export const getTickets = async (req, res) => {
  const tickets = await Ticket.find().sort({ createdAt: -1 });
  res.json(tickets);
};

// Update status
export const updateTicket = async (req, res) => {
  const { status } = req.body;

  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(ticket);
};