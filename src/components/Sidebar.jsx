import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-8">My Dashboard</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard/profile" className="hover:text-blue-600" >Profile</Link></li>
        <li><Link to="/dashboard/portfolio" className="hover:text-blue-600" >Portfolio</Link></li>
        <li><Link to="/dashboard/projects" className="hover:text-blue-600" >Projects</Link></li>
        <li><Link to="/dashboard/skills" className="hover:text-blue-600">Skills</Link></li>
        <li><Link to="/dashboard/settings" className="hover:text-blue-600">Settings</Link></li>

      </ul>
    </div>
  );
}
