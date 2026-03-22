import { createContext, useContext, useEffect, useReducer } from "react";
import api from "../services/api";

const TicketContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TICKETS":
      return { ...state, tickets: action.payload };
    default:
      return state;
  }
};

export const TicketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { tickets: [] });

  const fetchTickets = async () => {
    const res = await api.get("/tickets");
    dispatch({ type: "SET_TICKETS", payload: res.data });
  };

  const createTicket = async (data) => {
    await api.post("/tickets", data);
    fetchTickets();
  };

  const updateStatus = async (id, status) => {
    await api.patch(`/tickets/${id}`, { status });
    fetchTickets();
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <TicketContext.Provider
      value={{ tickets: state.tickets, createTicket, updateStatus }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);