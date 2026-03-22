import { useState } from "react";
import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";
import TicketCard from "../components/TicketCard";
import TicketToolbar from "../components/TicketToolbar";
import TicketModal from "../components/TicketModal";
import { useTickets } from "../context/TicketContext";

export default function Dashboard() {
  const { tickets } = useTickets();

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = tickets.filter((t) =>
    t.subject.toLowerCase().includes(search.toLowerCase())
  );

  const newCount = tickets.filter((t) => t.status === "NEW").length;
  const resolvedCount = tickets.filter((t) => t.status === "RESOLVED").length;

  return (
    <Layout>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatsCard title="Total Tickets" value={tickets.length} color="border-blue-500" />
        <StatsCard title="New" value={newCount} color="border-red-500" />
        <StatsCard title="Resolved" value={resolvedCount} color="border-green-500" />
      </div>

      <TicketToolbar
        search={search}
        setSearch={setSearch}
        openModal={() => setShowModal(true)}
      />

      <div className="grid gap-4">
        {filtered.map((t) => (
          <TicketCard key={t._id} ticket={t} />
        ))}
      </div>

      {showModal && <TicketModal close={() => setShowModal(false)} />}

    </Layout>
  );
}