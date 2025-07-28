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

    <div className="flex flex-col items-center justify-center gap-4">
  <img
    src={logo}
    alt="Tharun Vardhineni Logo"
    className="w-28 h-28 rounded-full shadow-md"
  />
  <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
    Tharun Kumar Vardhineni
  </h1>
</div>

      {/*<h1 className="text-xl items-center font-semibold">Welcome to my portfolio</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
      */}
      <a
  href="/resume.pdf"
  download="Tharun-Vardhineni-Resume.pdf"
  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
>
  Download Resume
</a>

    </div>
  );
}
