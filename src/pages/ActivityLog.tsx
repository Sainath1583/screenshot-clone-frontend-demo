
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, Search, LogIn, LogOut, Settings, RefreshCw } from "lucide-react";

const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      type: "login",
      description: "Successful login from Chrome on Windows",
      location: "San Francisco, CA",
      ip: "192.168.1.1",
      date: "2025-04-26T16:35:00"
    },
    {
      id: 2,
      type: "settings",
      description: "Password changed successfully",
      location: "San Francisco, CA",
      ip: "192.168.1.1",
      date: "2025-04-25T14:22:00"
    },
    {
      id: 3,
      type: "login",
      description: "Successful login from Safari on macOS",
      location: "San Jose, CA",
      ip: "192.168.1.23",
      date: "2025-04-24T10:15:00"
    },
    {
      id: 4,
      type: "logout",
      description: "Account logged out",
      location: "San Francisco, CA",
      ip: "192.168.1.1",
      date: "2025-04-24T09:30:00"
    },
    {
      id: 5,
      type: "settings",
      description: "Two-factor authentication enabled",
      location: "San Francisco, CA",
      ip: "192.168.1.1",
      date: "2025-04-23T19:45:00"
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "login":
        return <LogIn className="h-4 w-4 text-green-500" />;
      case "logout":
        return <LogOut className="h-4 w-4 text-blue-500" />;
      case "settings":
        return <Settings className="h-4 w-4 text-yellow-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Activity Log</h1>
        <p className="text-gray-500">View all your account's recent activities</p>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input type="search" placeholder="Search activities..." className="pl-9" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Activities</SelectItem>
            <SelectItem value="login">Login</SelectItem>
            <SelectItem value="logout">Logout</SelectItem>
            <SelectItem value="settings">Settings</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Recent Activities</h2>
            <button className="flex items-center text-sm text-blue-600">
              <RefreshCw className="h-3 w-3 mr-1" />
              Refresh
            </button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Activity</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Date & Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="mr-2">{getActivityIcon(activity.type)}</div>
                      <div>
                        <div className="font-medium">{activity.description}</div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {activity.type.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{activity.location}</TableCell>
                  <TableCell>
                    <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                      {activity.ip}
                    </code>
                  </TableCell>
                  <TableCell>
                    {new Date(activity.date).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short"
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ActivityLog;
