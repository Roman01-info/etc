"use client";

import { useState, useEffect } from "react";
import {
  Star,
  Award,
  Users,
  Globe,
  Heart,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll("[id]");
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Travelers" },
    { icon: Globe, number: "120+", label: "Destinations" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Average Rating" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make is centered around creating exceptional experiences for our travelers.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, from booking to return, ensuring unforgettable journeys.",
    },
    {
      icon: Award,
      title: "Trust & Integrity",
      description:
        "Building lasting relationships through transparency, reliability, and honest service.",
    },
  ];

  const team = [
    {
      name: "Md Biplob",
      role: "Founder & CEO",
      image: "/b-img.png",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-navy-900">
                <span className="text-amber-600">ETC</span>
                <span className="text-slate-800 ml-2 text-lg font-normal">
                  Elevated Travel Corporation
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#destinations"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/services"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Services
              </Link>
              <Link href="/about" className="text-amber-600 font-semibold">
                About
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/#destinations"
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/services"
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-amber-600 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-amber-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-amber-400">ETC</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in luxury travel since 2010, creating
            unforgettable experiences around the world.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                id={`stat-${index}`}
                className={`text-center transition-all duration-700 ${
                  isVisible[`stat-${index}`]
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              id="story-text"
              className={`transition-all duration-700 ${
                isVisible["story-text"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Founded in 2010, Elevated Travel Corporation began with a simple
                vision: to make luxury travel accessible, personalized, and
                truly exceptional.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                What started as a small boutique agency has grown into a
                globally recognized travel company, serving thousands of
                discerning travelers who seek nothing but the best.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our commitment to excellence, combined with our deep
                relationships with premium hotels, airlines, and local
                experiences, allows us to craft journeys that exceed
                expectations at every turn.
              </p>
            </div>
            <div
              id="story-image"
              className={`transition-all duration-700 ${
                isVisible["story-image"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src="/b-img.png"
                alt="Luxury Travel Experience"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="values-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["values-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                id={`value-${index}`}
                className={`bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 ${
                  isVisible[`value-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="team-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["team-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The passionate people behind your perfect travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                id={`team-${index}`}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible[`team-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="why-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["why-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose ETC?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Award-winning customer service excellence",
              "Best price guarantee on all bookings",
              "Handpicked luxury hotels and resorts",
              "Personalized travel itineraries",
              "Exclusive member-only deals and perks",
              "24/7 dedicated travel support",
            ].map((item, index) => (
              <div
                key={index}
                id={`why-${index}`}
                className={`flex items-start transition-all duration-700 ${
                  isVisible[`why-${index}`]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-amber-600 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                  <CheckCircle
                    className="text-white"
                    size={20}
                    fill="currentColor"
                  />
                </div>
                <span className="text-gray-200 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Travel with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us create your perfect travel experience today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Us
            <ChevronRight className="inline ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2026 Elevated Travel Corporation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
