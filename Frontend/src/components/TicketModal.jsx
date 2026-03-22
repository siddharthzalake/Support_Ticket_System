import { useState } from "react";
import { useTickets } from "../context/TicketContext";

export default function TicketModal({ close }) {
  const { createTicket } = useTickets();

  const [form, setForm] = useState({
    subject: "",
    message: "",
    priority: "Low",
  });

  const submit = (e) => {
    e.preventDefault();
    createTicket(form);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">

      <form
        onSubmit={submit}
        className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl space-y-5 animate-fadeIn"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create Ticket
          </h2>

          <button
            type="button"
            onClick={close}
            className="text-gray-400 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter ticket subject"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={form.subject}
            onChange={(e) =>
              setForm({ ...form, subject: e.target.value })
            }
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Describe your issue..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Priority
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value })
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={close}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow"
          >
            Create
          </button>
        </div>

      </form>
    </div>
  );
}