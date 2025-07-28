import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [username, setUsername] = useState("Tharun");
  const [email] = useState(user?.email || "");
  const [editing, setEditing] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Profile</h1>

      <label className="block mb-2 font-semibold text-gray-700">Email</label>
      <input
        type="email"
        value={email}
        disabled
        className="w-full mb-6 px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
      />

      <label className="block mb-2 font-semibold text-gray-700">Username</label>
      <input
        type="text"
        value={username}
        disabled={!editing}
        onChange={(e) => setUsername(e.target.value)}
        className={`w-full mb-6 px-4 py-2 border rounded-md ${
          editing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
        }`}
      />

      <button
        onClick={() => setEditing(!editing)}
        className={`px-6 py-2 rounded text-white ${
          editing ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
        } transition`}
      >
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
}
