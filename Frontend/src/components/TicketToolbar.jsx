export default function TicketToolbar({ search, setSearch, openModal }) {
  return (
    <div className="flex justify-between mb-6">

      <input
        type="text"
        placeholder="Search tickets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded p-2 w-1/3"
      />

      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        + New Ticket
      </button>
    </div>
  );
}