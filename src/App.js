import React, { useState } from "react";
import {
  Bus,
  BarChart2,
  Map,
  Users,
  Bell,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card } from "./components/Card";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Map,
      title: "Route Optimization",
      description: "AI-driven route planning for maximum efficiency",
    },
    {
      icon: Users,
      title: "Crowd Management",
      description: "Real-time passenger load monitoring",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Predictive maintenance notifications",
    },
    {
      icon: BarChart2,
      title: "Analytics Dashboard",
      description: "Comprehensive performance insights",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "11,000",
      features: [
        "Basic route optimization",
        "Simple analytics dashboard",
        "Email support",
        "Up to 5 buses",
      ],
    },
    {
      name: "Pro",
      price: "22,000",
      features: [
        "Advanced route optimization",
        "Full analytics suite",
        "Priority support",
        "Up to 15 buses",
        "Crowd management",
        "Maintenance alerts",
      ],
    },
    {
      name: "Enterprise",
      price: "55,000",
      features: [
        "Custom route optimization",
        "Advanced analytics & reporting",
        "24/7 dedicated support",
        "Unlimited buses",
        "Full feature access",
        "API integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-600">Next</span>
              <span className="text-2xl font-bold text-gray-800">Stop</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-orange-600"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-orange-600"
              >
                Pricing
              </a>
              <a href="#about" className="text-gray-600 hover:text-orange-600">
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-orange-600"
              >
                Contact
              </a>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200">
                Sign In
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                Get Started
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Content with padding for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                Transform Your Bus Operations with Smart Technology
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Optimize routes, boost profits, and deliver better service with
                our AI-powered platform
              </p>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 -mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "30%", label: "Average Fuel Savings" },
              { value: "25%", label: "Increased Revenue" },
              { value: "95%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Modern Bus Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-6 ${
                    index === 1 ? "border-2 border-orange-500" : ""
                  }`}
                >
                  <div className="text-xl font-bold mb-4">
                    {plan.name}
                    {index === 1 && (
                      <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">৳{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full mt-6 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2
                      ${
                        index === 1
                          ? "bg-orange-600 text-white hover:bg-orange-700"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Bus Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of bus operators who are already optimizing their
              routes and increasing profits
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Company",
                  links: ["About Us", "Blog", "Careers", "Contact"],
                },
                {
                  title: "Product",
                  links: ["Features", "Pricing", "Security", "API"],
                },
                {
                  title: "Support",
                  links: ["Help Center", "Documentation", "Status", "Updates"],
                },
                {
                  title: "Contact",
                  links: [
                    "aweshrumc@gmail.com",
                    "+8801751920561",
                    "Dhaka, Bangladesh",
                  ],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
