import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl items-center font-semibold">Welcome to my portfolio</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}
