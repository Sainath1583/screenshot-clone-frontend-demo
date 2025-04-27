
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  const [settings, setSettings] = useState({
    mfa: false,
    emailAlerts: false,
    smsAlerts: false,
    loginNotifications: false,
    ipRestrictions: false,
    anomalyThreshold: 0.6,
  });

  const [profile, setProfile] = useState({
    fullName: "Sri Sainath D",
    email: "srisainath24@gmail.com",
    phone: "+919962113625"
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Account Settings</h1>
        <p className="text-gray-500">Manage your profile and security preferences</p>
      </div>

      <Tabs defaultValue="security">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input value={profile.fullName} onChange={() => {}} />
              </div>
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <Input value={profile.email} onChange={() => {}} />
              </div>
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <Input value={profile.phone} onChange={() => {}} />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Multi-factor Authentication</h3>
                  <p className="text-sm text-gray-500">Require verification code for logins from new devices</p>
                </div>
                <Switch checked={settings.mfa} onCheckedChange={(checked) => setSettings({...settings, mfa: checked})} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Alerts</h3>
                  <p className="text-sm text-gray-500">Receive security alerts via email</p>
                </div>
                <Switch checked={settings.emailAlerts} onCheckedChange={(checked) => setSettings({...settings, emailAlerts: checked})} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">SMS Alerts</h3>
                  <p className="text-sm text-gray-500">Receive security alerts via SMS</p>
                </div>
                <Switch checked={settings.smsAlerts} onCheckedChange={(checked) => setSettings({...settings, smsAlerts: checked})} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Login Notifications</h3>
                  <p className="text-sm text-gray-500">Get notified of all login attempts</p>
                </div>
                <Switch checked={settings.loginNotifications} onCheckedChange={(checked) => setSettings({...settings, loginNotifications: checked})} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">IP Restrictions</h3>
                  <p className="text-sm text-gray-500">Only allow logins from trusted IP addresses</p>
                </div>
                <Switch checked={settings.ipRestrictions} onCheckedChange={(checked) => setSettings({...settings, ipRestrictions: checked})} />
              </div>

              <div>
                <h3 className="font-medium mb-2">Anomaly Detection Threshold: {settings.anomalyThreshold}</h3>
                <p className="text-sm text-gray-500 mb-4">Set sensitivity for anomaly detection (0.1 = less sensitive, 0.9 = more sensitive)</p>
                <Slider
                  min={0.1}
                  max={0.9}
                  step={0.1}
                  value={[settings.anomalyThreshold]}
                  onValueChange={([value]) => setSettings({...settings, anomalyThreshold: value})}
                />
              </div>
            </CardContent>
          </Card>

          <Button>Save Settings</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
