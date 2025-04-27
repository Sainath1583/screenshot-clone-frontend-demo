import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldAlert, LogIn, Bell } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const stats = [
    { 
      title: "Total Logins", 
      value: "1,234", 
      description: "All login attempts",
      icon: LogIn,
      color: "text-blue-500"
    },
    { 
      title: "Normal Activity", 
      value: "1,156", 
      description: "Regular login attempts",
      icon: Shield,
      color: "text-green-500"
    },
    { 
      title: "Anomalous Activity", 
      value: "78", 
      description: "Suspicious login attempts",
      icon: ShieldAlert,
      color: "text-yellow-500"
    },
    { 
      title: "Active Alerts", 
      value: "12", 
      description: "Unresolved security issues",
      icon: Bell,
      color: "text-red-500"
    }
  ];

  const loginHistory = [
    {
      id: 1,
      device: "Chrome / Windows",
      location: "San Francisco, US",
      status: "success",
      timestamp: "2025-04-27 09:15 AM"
    },
    {
      id: 2,
      device: "Safari / macOS",
      location: "New York, US",
      status: "success",
      timestamp: "2025-04-27 08:30 AM"
    },
    {
      id: 3,
      device: "Firefox / Linux",
      location: "London, UK",
      status: "failed",
      timestamp: "2025-04-27 07:45 AM"
    },
    {
      id: 4,
      device: "Chrome / Android",
      location: "Toronto, CA",
      status: "success",
      timestamp: "2025-04-27 06:20 AM"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      title: "Multiple Failed Login Attempts",
      description: "5 failed login attempts from IP 192.168.1.155",
      severity: "high",
      time: "15 minutes ago"
    },
    {
      id: 2,
      title: "New Device Login",
      description: "Login from new device in Paris, France",
      severity: "medium",
      time: "1 hour ago"
    },
    {
      id: 3,
      title: "Unusual Login Time",
      description: "Login detected outside normal hours",
      severity: "low",
      time: "2 hours ago"
    }
  ];

  const activityData = [
    { date: '2025-04-21', normal: 156, anomaly: 8 },
    { date: '2025-04-22', normal: 162, anomaly: 12 },
    { date: '2025-04-23', normal: 145, anomaly: 15 },
    { date: '2025-04-24', normal: 168, anomaly: 10 },
    { date: '2025-04-25', normal: 172, anomaly: 14 },
    { date: '2025-04-26', normal: 158, anomaly: 11 },
    { date: '2025-04-27', normal: 195, anomaly: 8 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Security Dashboard</h1>
        <p className="text-gray-500">Welcome back, Sri Sainath D</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center gap-2">
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
              <h3 className="text-lg font-medium text-gray-600">{stat.title}</h3>
            </div>
            <div className="mt-2 flex justify-between items-end">
              <div className="text-3xl font-semibold">{stat.value}</div>
            </div>
            <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="login-history">Login History</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="space-y-4">
            <div className="rounded-lg border bg-green-50 border-green-200 p-4">
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-2">✓</span>
                Security Status: Your account is secure
              </div>
              <p className="text-green-600 mt-1">
                Regular login patterns detected. No immediate security concerns.
              </p>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Activity Overview - Last 7 Days</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="normal" 
                      stroke="#22c55e" 
                      name="Normal Activity"
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="anomaly" 
                      stroke="#dc2626" 
                      name="Anomaly Activity"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="login-history">
          <Card className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device / Browser</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loginHistory.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{log.device}</TableCell>
                    <TableCell>{log.location}</TableCell>
                    <TableCell>
                      <Badge variant={log.status === 'success' ? 'outline' : 'destructive'}>
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{log.timestamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <Card className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Alert</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell>
                      <div className="font-medium">{alert.title}</div>
                      <div className="text-sm text-gray-500">{alert.description}</div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={
                          alert.severity === 'high' 
                            ? 'bg-red-100 text-red-800 border-red-200' 
                            : alert.severity === 'medium'
                            ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                            : 'bg-blue-100 text-blue-800 border-blue-200'
                        }
                      >
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>{alert.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
