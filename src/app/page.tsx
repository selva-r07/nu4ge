'use client';

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "Expert Speakers",
      description: "Learn from industry leaders and renowned academics",
      icon: "👨‍🎓"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with professionals and peers from around the world",
      icon: "🤝"
    },
    {
      title: "Interactive Workshops",
      description: "Hands-on sessions and collaborative learning experiences",
      icon: "💡"
    },
    {
      title: "Latest Innovations",
      description: "Discover cutting-edge research and industry trends",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-blue-600">🎓</div>
              <span className="text-xl font-bold text-gray-900">Symposium</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition">Schedule</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
              <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
              <a href="#schedule" className="block text-gray-700 hover:text-blue-600">Schedule</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to the Symposium
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us for an extraordinary gathering of minds, innovation, and knowledge sharing. Network with industry experts and shape the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
            >
              Register Now
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Our Symposium
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Our annual symposium brings together thought leaders, researchers, and professionals from diverse fields to share insights and explore emerging trends.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                With over 500+ attendees, engaging workshops, and keynote speeches, this event is the premier platform for innovation and professional growth.
              </p>
              <p className="text-gray-700 text-lg">
                Whether you're looking to expand your network or discover new opportunities, our symposium offers unparalleled value.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg h-64 md:h-80 flex items-center justify-center">
              <span className="text-6xl">📊</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Attend?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section id="schedule" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Event Schedule
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { day: "Day 1", title: "Opening Ceremony & Keynotes", date: "March 15, 2024" },
              { day: "Day 2", title: "Interactive Workshops & Sessions", date: "March 16, 2024" },
              { day: "Day 3", title: "Closing Panel & Networking", date: "March 17, 2024" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 font-semibold mb-2">{item.day}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Secure your spot at the most anticipated symposium of the year
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition text-lg"
          >
            Register Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition">History</a></li>
                <li><a href="#" className="hover:text-white transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Events</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Schedule</a></li>
                <li><a href="#" className="hover:text-white transition">Speakers</a></li>
                <li><a href="#" className="hover:text-white transition">Venue</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <p>Email: info@symposium.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Conference Ave</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 Symposium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}