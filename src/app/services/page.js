"use client";

import { useState, useEffect } from "react";
import {
  Plane,
  Hotel,
  Headphones,
  MapPin,
  Star,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Globe,
  Shield,
  CreditCard,
  FileCheck,
  Users,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
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

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description:
        "Access to premium flights worldwide with exclusive deals and priority boarding options. We partner with major airlines to bring you the best rates and most comfortable travel experiences.",
      features: [
        "First & Business Class bookings",
        "Multi-city itineraries",
        "Priority boarding assistance",
        "Exclusive airline partnerships",
        "Real-time flight tracking",
      ],
    },
    {
      icon: Hotel,
      title: "Luxury Hotels",
      description:
        "Handpicked 5-star accommodations that offer unparalleled comfort and service. From boutique hotels to world-renowned resorts, we ensure your stay is nothing short of extraordinary.",
      features: [
        "5-star hotel partnerships",
        "Boutique & unique stays",
        "Complimentary upgrades",
        "Spa & wellness packages",
        "Personal concierge service",
      ],
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance to ensure your journey is seamless from start to finish. Our dedicated team is always available to help with any requests or emergencies.",
      features: [
        "24/7 phone & chat support",
        "Emergency assistance",
        "Travel insurance guidance",
        "Multi-language support",
        "Dedicated travel advisor",
      ],
    },
    {
      icon: FileCheck,
      title: "Visa Processing",
      description:
        "Comprehensive visa assistance for all major destinations. We manage the entire documentation and application process to ensure your travel plans stay on track.",
      features: [
        "Tourist & Business visa expert",
        "Document verification service",
        "Appointment scheduling assistance",
        "Visa interview preparation",
        "Real-time application tracking",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: MapPin,
      title: "Guided Tours",
      description:
        "Expert-led tours to the world's most fascinating destinations with personalized itineraries.",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description:
        "Comprehensive travel insurance packages to protect your journey and give you peace of mind.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description:
        "Multiple payment options with flexible installment plans to make luxury travel accessible.",
    },
    {
      icon: Users,
      title: "Group Travel",
      description:
        "Specialized planning for large groups, weddings, and corporate team-building trips.",
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
              <Link href="/services" className="text-amber-600 font-semibold">
                Services
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-amber-600 transition-colors"
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
                  className="text-amber-600 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-slate-700 hover:text-amber-600 transition-colors"
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
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&h=1080&fit=crop&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-amber-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-amber-400">Premium</span> Services
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto px-4">
            Comprehensive travel solutions designed to make your journey
            extraordinary from start to finish.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                  isVisible[`service-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={40} />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle
                          className="text-amber-600 mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=800&h=600&fit=crop&q=80"
                        : index === 1
                        ? "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80"
                        : index === 2
                        ? "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80"
                        : "https://images.unsplash.com/photo-1557124816-e9b7d5440de2?w=800&h=600&fit=crop&q=80"
                    }
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="additional-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["additional-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete travel support to enhance your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                id={`additional-${index}`}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible[`additional-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us create your perfect travel experience today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in Touch
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
