"use client";

import { useState, useEffect } from "react";
import {
  Plane,
  Hotel,
  Headphones,
  MapPin,
  Star,
  Mail,
  ChevronRight,
  Menu,
  X,
  FileCheck,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "./data/destinations";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
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

    // Observe all elements with IDs that need animation
    const animatedElements = document.querySelectorAll("[id]");
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description:
        "Access to premium flights worldwide with exclusive deals and priority boarding options.",
    },
    {
      icon: Hotel,
      title: "Luxury Hotels",
      description:
        "Handpicked 5-star accommodations that offer unparalleled comfort and service.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance to ensure your journey is seamless from start to finish.",
    },
    {
      icon: FileCheck,
      title: "Visa Processing",
      description:
        "Expert assistance for all types of visa applications with a high success rate.",
    },
  ];

  const whyChooseUs = [
    "Award-winning customer service excellence",
    "Best price guarantee on all bookings",
    "Handpicked luxury hotels and resorts",
    "Personalized travel itineraries",
    "Exclusive member-only deals and perks",
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
                  src="/gallery/etc_main_logo.png"
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
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/gallery"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                Gallery
              </Link>
<Link
                href={`/packages/${destinations[0].id}`}
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
                  className="text-slate-700 hover:text-amber-600 transition-colors"
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
                  href="/gallery"
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
<Link
                  href={`/packages/${destinations[0].id}`}
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
                Elevate Your Journey with{" "}
                <span className="text-amber-400">ETC</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 animate-fade-in-delay">
                Luxury travel experiences curated just for you.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("destinations")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-amber-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Destinations
                <ChevronRight className="inline ml-2" size={20} />
              </button>
            </div>

            {/* Flying Plane Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=650&fit=crop&q=80"
                  alt="Flying airplane"
                  className="w-full h-64 sm:h-80 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              {/* Floating Badge - Premium Flights */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-2xl shadow-xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 animate-float">
                <div className="bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plane className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm sm:text-base">Premium Flights</p>
                  <p className="text-xs text-slate-500">Worldwide coverage</p>
                </div>
              </div>

              {/* Floating Badge - Rating */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 animate-float-delay">
                <div className="bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="text-amber-400" size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm sm:text-base">4.9 Rated</p>
                  <p className="text-xs text-slate-500">Trusted travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="services-header"
            className={`text-center mb-8 sm:mb-16 transition-all duration-700 ${
              isVisible["services-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Comprehensive travel solutions tailored to your every need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className={`bg-gradient-to-br from-slate-50 to-white p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 ${
                  isVisible[`service-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-amber-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section id="destinations" className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="destinations-header"
            className={`text-center mb-8 sm:mb-16 transition-all duration-700 ${
              isVisible["destinations-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Popular Destinations
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Discover our most sought-after luxury destinations, handpicked for
              unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                id={`dest-${index}`}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible[`dest-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star
                      className="text-amber-500 mr-1"
                      size={16}
                      fill="currentColor"
                    />
                    <span className="text-sm font-semibold">{dest.rating}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-amber-600 mr-2" size={18} />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                      {dest.name}
                    </h3>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-600 mb-3 sm:mb-4">
                    {dest.price}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    per person, all inclusive
                  </p>
<Link
                    href={`/packages/${dest.id}`}
                    className="w-full bg-slate-800 text-white py-2 sm:py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300 font-semibold text-sm sm:text-base text-center block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-12 sm:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              id="about-text"
              className={`transition-all duration-700 ${
                isVisible["about-text"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Why Choose ETC?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                With over a decade of excellence in luxury travel, we deliver
                experiences that exceed expectations.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-amber-600 rounded-full p-1 mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <Star
                        className="text-white"
                        size={16}
                        fill="currentColor"
                      />
                    </div>
                    <span className="text-gray-200 text-sm sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="about-image"
              className={`transition-all duration-700 delay-200 ${
                isVisible["about-image"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop"
                alt="Luxury Travel Experience"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                <span className="text-amber-500">ETC</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                Elevated Travel Corporation - Your partner in luxury travel
                experiences since 2010.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                >
                  <span className="text-white text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                >
                  <span className="text-white text-sm font-bold">𝕏</span>
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                >
                  <span className="text-white text-sm font-bold">📷</span>
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                >
                  <span className="text-white text-sm font-bold">in</span>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Contact Us
              </h4>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <p>📞 01865-002303, 01711-025870</p>
                <p>✉️ etctravelsme@gmail.com, biplob_wali@yahoo.com</p>
                <p>📍 Hotel InterContinental Dhaka, Building # 3, (2nd Floor), 119 Kazi Nazrul Islam Avenue, (1, Minto Road, Dhaka-1000)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-amber-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Newsletter
              </h4>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                Subscribe for exclusive deals and travel inspiration.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col space-y-3"
              >
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-l-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-amber-600"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-amber-600 px-4 py-2 rounded-r-lg hover:bg-amber-700 transition-colors"
                  >
                    <Mail size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
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
            <p className="text-center text-gray-400">&copy; 2026 Elevated Travel Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
