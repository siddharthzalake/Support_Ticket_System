import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">
          Support Desk
        </h2>

        <nav>
          <Link
            to="/"
            className="block p-3 rounded hover:bg-blue-50 font-medium"
          >
            Dashboard
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}