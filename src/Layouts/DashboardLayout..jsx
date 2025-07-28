import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function DashboardLayout() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex h-screen bg-white dark:bg-darkBg text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-slate-800 p-4 shadow">
        <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
        {/* Add your Nav Links here */}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-slate-800">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-primary text-white"
          >
            {darkMode ? <SunIcon className="h-5" /> : <MoonIcon className="h-5" />}
          </button>
        </header>

        {/* Page Content */}
        <main className="p-6 overflow-y-auto bg-slate-100 dark:bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
