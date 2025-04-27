
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const user = {
    name: "Sri Sainath D",
    email: "srisainath24@gmail.com"
  };

  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-semibold text-blue-900">AegisCloud</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">{user.name}</div>
              <div className="text-gray-500">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
