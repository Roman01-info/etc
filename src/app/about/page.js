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
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      name: "Md. Waliul Hasan (Biplob)",
      role: "CEO & OWNER",
      image: "/b-img.png",
    },
    {
      name: "Arunima Chowdhury",
      role: "Chairman",
      image: "/gallery/chairman.png"
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
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/gallery/etc_main_logo (1).png"
                  alt="ETC Logo"
                  width={100}
                  height={58}
                  className="h-16 w-auto object-contain"
                  priority
                />
                <h5 className="text-xl font-bold text-slate-800 hidden sm:block">Elevated Travel Corporation</h5>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-amber-600 font-semibold"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Gallery
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
                  href="/"
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
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
                  href="/gallery"
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
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
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-amber-950/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold text-xs sm:text-sm mb-6 uppercase tracking-widest backdrop-blur-sm">
            Discover The World
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Elevated <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Journeys</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Your trusted partner in luxury travel since 2010. We don't just plan trips; we string together unforgettable memories.
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
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are a good, well respected & leading Travel Agent dealing with high profile customers from home & abroad. We are looking for an opportunity to be associated with you / your esteemed Organization to provide our efficient & smooth service in Travel related matters.
              </p>
            </div>
            <div
              id="story-image"
              className={`transition-all duration-1000 ${
                isVisible["story-image"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-600 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img
                  src="/gallery/etc-5.jpeg"
                  alt="Luxury Travel Experience"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Values */}
      <section className="py-24 bg-slate-50">
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
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 ${
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
      <section className="py-24 bg-white">
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
                className={`bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
                  isVisible[`team-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Features of ETC-ELEVATED TRAVEL CORPORATION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "We are one stop solution for all travel related services & logistic support.",
              "We have computerized Airlines & Hotels reservation system both at home & abroad.",
              "Excellent & prompt service (door to door service)",
              "Most competitive Price",
              "We provide Visa processing service like Thailand, Singapore, Malaysia, Indonesia, Vietnam, Dubai, China, Philippine etc.",
              "By telephone call is enough to find your tickets on your desk.",
              "We are highly experienced in expatriates handling & corporate travel.",
              "We organize Package Tour both inside the country & outside the World.",
              "Credit facility for reputed & permanent clients.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner With Us For Your Next Journey
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            So, considering all above, we may kindly be appointed as your official Travel Agent to provide you complete travel related service. Please give us a call for your next trip.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IATA Accreditation Section */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 mb-8 border border-slate-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative z-10">
              <div className="flex-shrink-0 bg-white/5 border border-slate-700 rounded-2xl p-4 flex items-center justify-center">
                <Image
                  src="/gallery/etc_main_logo (3).png"
                  alt="IATA Accredited Agent"
                  width={120}
                  height={70}
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                  <BadgeCheck size={14} />
                  IATA Accredited Agent
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Official IATA Accredited Travel Agency
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  An IATA-accredited agent is a travel agency or professional authorized by the International Air Transport Association to issue airline tickets and access airline systems directly.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Elevated Travel Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
