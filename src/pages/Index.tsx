
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Bell, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-600">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white ml-2">AegisCloud</span>
          </div>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary">Create Account</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <Shield className="h-24 w-24 text-white mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">AegisCloud</h1>
          <p className="text-xl text-white/90 mb-8">
            Advanced anomaly detection for cloud security using machine learning
          </p>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-900">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary" size="lg">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Powerful Security Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white p-6 text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ML-Powered Anomaly Detection</h3>
            <p className="text-gray-600">
              Our autoencoder-based machine learning system detects suspicious login patterns and flags potential security threats.
            </p>
          </Card>

          <Card className="bg-white p-6 text-center">
            <div className="flex justify-center mb-4">
              <Bell className="h-12 w-12 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
            <p className="text-gray-600">
              Receive instant notifications via email and SMS when suspicious login activities are detected.
            </p>
          </Card>

          <Card className="bg-white p-6 text-center">
            <div className="flex justify-center mb-4">
              <Layers className="h-12 w-12 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Intelligent MFA</h3>
            <p className="text-gray-600">
              Adaptive multi-factor authentication that activates only when suspicious activities are detected.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to secure your cloud?</h2>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Protect your systems with advanced anomaly detection and intelligent security alerts.
        </p>
        <Link to="/signup">
          <Button className="bg-white text-blue-900 hover:bg-gray-200">
            Get Started <span className="ml-2">→</span>
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-xl font-bold ml-2">AegisCloud</span>
            </div>
            <div className="text-sm text-white/70">
              © 2025 AegisCloud. All rights reserved. <br />
              Secure Your Cloud with Confidence
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
