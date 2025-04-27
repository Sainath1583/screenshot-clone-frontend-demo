
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const stats = [
    { title: "Total Logins", value: "0", description: "All login attempts" },
    { title: "Normal Activity", value: "0", description: "Regular login attempts" },
    { title: "Anomalous Activity", value: "0", description: "Suspicious login attempts" },
    { title: "Active Alerts", value: "0", description: "Unresolved security issues" }
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
            <h3 className="text-lg font-medium text-gray-600">{stat.title}</h3>
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
          <div className="rounded-lg border bg-green-50 border-green-200 p-4 mt-4">
            <div className="flex items-center text-green-600 font-medium">
              <span className="mr-2">✓</span>
              Security Status: Your account is secure
            </div>
            <p className="text-green-600 mt-1">
              No suspicious activities detected in your recent login history.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="login-history">
          <div className="text-center text-gray-500 py-12">
            No login history available
          </div>
        </TabsContent>

        <TabsContent value="alerts">
          <div className="text-center text-gray-500 py-12">
            No security alerts
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
