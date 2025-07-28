import { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("Light");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Settings</h1>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <input
          id="notifications"
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications((prev) => !prev)}
          className="w-5 h-5 accent-indigo-600"
        />
        <label htmlFor="notifications" className="font-semibold text-gray-700">
          Enable notifications
        </label>
      </div>
    </div>
  );
}
