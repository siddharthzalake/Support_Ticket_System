import { useTickets } from "../context/TicketContext";

export default function TicketCard({ ticket }) {
  const { updateStatus } = useTickets();

  const statusColor = {
    NEW: "bg-red-100 text-red-600",
    INVESTIGATING: "bg-yellow-100 text-yellow-600",
    RESOLVED: "bg-green-100 text-green-600",
  };

  const priorityColor = {
    Low: "bg-green-100 text-green-600",
    Medium: "bg-yellow-100 text-yellow-600",
    High: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-white p-5 rounded shadow">

      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{ticket.subject}</h3>

        <span className={`px-2 py-1 rounded text-xs ${priorityColor[ticket.priority]}`}>
          {ticket.priority}
        </span>
      </div>

      <p className="text-gray-600 mb-3">{ticket.message}</p>

      <div className="flex justify-between items-center">

        <span className={`px-2 py-1 rounded text-xs ${statusColor[ticket.status]}`}>
          {ticket.status}
        </span>

        <select
          onChange={(e) => updateStatus(ticket._id, e.target.value)}
          className="border p-1 rounded"
        >
          <option>NEW</option>
          <option>INVESTIGATING</option>
          <option>RESOLVED</option>
        </select>

      </div>
    </div>
  );
}