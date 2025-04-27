
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, MapPin } from "lucide-react";

const Login = () => {
  const [locationError, setLocationError] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enableLocation = () => {
    // In a real app, we would request geolocation permissions here
    setLocationError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationError) {
      console.log("Login submitted with:", { email, password });
      // Handle login logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-600">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Shield className="h-16 w-16 text-white" />
          <h1 className="text-4xl font-bold text-white">AegisCloud</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Login to AegisCloud</h2>
            <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
          </div>

          {locationError && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertTitle className="text-red-600 flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> Location Required
              </AlertTitle>
              <AlertDescription className="text-red-500">
                Location permission denied. Please enable location services to continue.
                <Button variant="link" className="text-red-600 p-0 h-auto mt-2 flex items-center" onClick={enableLocation}>
                  <MapPin className="h-3 w-3 mr-1" /> Enable Location
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input 
                type="email" 
                placeholder="your.email@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <Input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button 
              className="w-full bg-blue-800 hover:bg-blue-700" 
              disabled={locationError}
              type="submit"
            >
              {locationError ? "Enable Location to Sign In" : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
