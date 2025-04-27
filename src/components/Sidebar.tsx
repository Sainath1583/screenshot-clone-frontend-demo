
import { NavLink } from "react-router-dom";
import { Activity, Bell, LogOut, Settings } from "lucide-react";

const Sidebar = () => {
  const user = {
    name: "Sri Sainath D",
    email: "srisainath24@gmail.com"
  };

  return (
    <div className="w-64 bg-[#0A0E29] text-white p-6">
      <div className="flex items-center mb-8">
        <div className="text-2xl font-bold">AegisCloud</div>
      </div>
      
      <div className="mb-8">
        <div className="text-sm text-gray-400">Logged in as</div>
        <div className="font-semibold">{user.name}</div>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg ${
              isActive ? "bg-blue-900 text-white" : "text-gray-300 hover:bg-blue-900/50"
            }`
          }
        >
          <Activity className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg ${
              isActive ? "bg-blue-900 text-white" : "text-gray-300 hover:bg-blue-900/50"
            }`
          }
        >
          <Bell className="w-5 h-5" />
          <span>Alerts</span>
        </NavLink>

        <NavLink
          to="/activity"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg ${
              isActive ? "bg-blue-900 text-white" : "text-gray-300 hover:bg-blue-900/50"
            }`
          }
        >
          <Activity className="w-5 h-5" />
          <span>Activity Log</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg ${
              isActive ? "bg-blue-900 text-white" : "text-gray-300 hover:bg-blue-900/50"
            }`
          }
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="absolute bottom-6">
        <button className="flex items-center space-x-3 p-3 text-gray-300 hover:bg-blue-900/50 rounded-lg">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
