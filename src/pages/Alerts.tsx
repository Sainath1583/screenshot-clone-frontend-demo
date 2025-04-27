
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, AlertCircle } from "lucide-react";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "New device login",
      description: "Login detected from a new device in San Francisco, CA",
      severity: "high",
      date: "2025-04-26T16:35:00",
      status: "unresolved"
    },
    {
      id: 2,
      title: "Failed login attempts",
      description: "5 failed login attempts from IP 192.168.1.155",
      severity: "medium",
      date: "2025-04-25T09:12:00",
      status: "resolved"
    },
    {
      id: 3,
      title: "Password changed",
      description: "Your account password was changed successfully",
      severity: "low",
      date: "2025-04-23T14:22:00",
      status: "resolved"
    }
  ]);

  const resolveAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: "resolved" } : alert
    ));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Security Alerts</h1>
          <p className="text-gray-500">View and manage security alerts for your account</p>
        </div>
        <Button className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Mark All as Read
        </Button>
      </div>

      <Card>
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alert</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.length > 0 ? (
                alerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell>
                      <div className="font-medium">{alert.title}</div>
                      <div className="text-sm text-gray-500">{alert.description}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                        {alert.severity === "high" && <AlertCircle className="h-3 w-3 mr-1" />}
                        {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(alert.date).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short"
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge variant={alert.status === "resolved" ? "outline" : "secondary"}>
                        {alert.status === "resolved" ? (
                          <span className="flex items-center">
                            <Check className="h-3 w-3 mr-1" />
                            Resolved
                          </span>
                        ) : (
                          "Unresolved"
                        )}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {alert.status === "unresolved" && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => resolveAlert(alert.id)}
                        >
                          Resolve
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <Bell className="h-12 w-12 text-gray-300 mb-2" />
                      <p>No security alerts</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Alerts;
