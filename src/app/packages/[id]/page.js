"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Star,
  Menu,
  X,
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  User,
  MessageSquare,
  ChevronRight,
BadgeCheck,
  Plane,
  Shield,
  Tag,
  Palmtree,
  Ship,
  Mountain,
  Fish,
  Landmark,
  Train,
  Sun,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { destinations, getDestinationById } from "../../data/destinations";

function DayCard({ item, index, Icon, highlightTime }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image with hover zoom */}
      <div className="relative h-48 overflow-hidden">
{item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <Icon size={48} className="text-white" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

        {/* Day badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          <Calendar size={13} />
          {item.day}
        </div>

        {/* Activity icon chip */}
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-amber-600 shadow-md">
          <Icon size={20} strokeWidth={2} />
        </div>
      </div>

{/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            {highlightTime || `Activity ${index + 1}`}
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600">
            <MapPin size={12} />
            {destinationForIcon(item.icon)}
          </span>
        </div>
        <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">
          {item.title}
        </h4>
        <p className="text-slate-600 leading-relaxed text-sm flex-1">
          {item.description}
        </p>

{/* Day highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
            {item.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-700"
              >
                <CheckCircle
                  className="text-green-600 mt-0.5 flex-shrink-0"
                  size={16}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function DayAccordion({ item, index, Icon, highlightTime, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
      {/* Accordion header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex flex-col items-center justify-center shadow-md flex-shrink-0">
          <Icon size={18} strokeWidth={2} />
          <span className="text-[10px] font-bold leading-none mt-0.5">
            {index + 1}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
              {item.day}
            </span>
            <span className="text-xs text-slate-400">
              {highlightTime || `Activity ${index + 1}`}
            </span>
          </div>
          <h4 className="text-base font-bold text-slate-800 truncate">
            {item.title}
          </h4>
        </div>
        <ChevronRight
          size={20}
          className={`text-amber-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Accordion body */}
      {isOpen && (
        <div className="px-4 pb-4">
          <div className="h-40 rounded-xl overflow-hidden mb-4">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Icon size={40} className="text-white" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600">
              <MapPin size={12} />
              {destinationForIcon(item.icon)}
            </span>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">
            {item.description}
          </p>
          {item.highlights && item.highlights.length > 0 && (
            <ul className="space-y-2 border-t border-slate-100 pt-3">
              {item.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <CheckCircle
                    className="text-green-600 mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function destinationForIcon(icon) {
  const map = {
    plane: "Travel",
    palmtree: "Beach",
    ship: "Cruise",
    fish: "Reef",
    mountain: "Alps",
    landmark: "City",
    train: "Rail",
    sun: "Sunset",
    utensils: "Dining",
  };
  return map[icon] || "Location";
}

export default function PackageDetails() {
  const params = useParams();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "2",
    message: "",
  });
const [confirmed, setConfirmed] = useState(false);
  const [openDay, setOpenDay] = useState(0);

const destination = getDestinationById(params.id);

const iconMap = {
    plane: Plane,
    palmtree: Palmtree,
    ship: Ship,
    fish: Fish,
    mountain: Mountain,
    landmark: Landmark,
    train: Train,
    sun: Sun,
    utensils: Utensils,
  };

  const highlightTimes = [
    "Morning",
    "Morning",
    "Afternoon",
    "Evening",
    "Morning",
    "Afternoon",
    "Evening",
  ];

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

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Package Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          The package you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

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
                <h5 className="text-xl font-bold text-slate-800 hidden sm:block">
                  Elevated Travel Corporation
                </h5>
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

      {/* Confirmation Banner */}
      {confirmed ? (
        <section className="pt-28 sm:pt-32 px-4">
          <div className="max-w-3xl mx-auto bg-green-50 border-2 border-green-200 rounded-2xl p-8 sm:p-12 text-center">
            <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={40} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-lg text-green-800 mb-2">
              Thank you, <span className="font-semibold">{booking.name || "Traveler"}</span>!
            </p>
            <p className="text-green-700 mb-6">
              Your booking request for the{" "}
              <span className="font-semibold">{destination.name}</span> package
              has been received. Our travel experts will contact you within 24
              hours to confirm details and complete your reservation.
            </p>
            <div className="bg-white rounded-xl p-6 mb-8 text-left space-y-2">
              <p className="font-semibold text-slate-800">
                📍 Destination: {destination.name}
              </p>
              <p className="font-semibold text-slate-800">
                📅 Travel Date: {booking.date || "Flexible"}
              </p>
              <p className="font-semibold text-slate-800">
                👥 Travelers: {booking.travelers}
              </p>
              <p className="font-semibold text-slate-800">
                💰 Estimated Package: {destination.price} per person
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href={`/packages/${destinations[0].id}`}
                className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
              >
                Explore Other Packages
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${destination.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 transition-colors"
          >
            <ChevronRight className="rotate-180 mr-1" size={18} />
            Back to Destinations
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Star
              className="text-amber-400"
              size={20}
              fill="currentColor"
            />
            <span className="text-white font-semibold text-lg">
              {destination.rating} Rating
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {destination.name}
          </h1>
          <p className="text-lg text-gray-200 mb-6 flex items-center flex-wrap gap-2">
            <MapPin className="text-amber-400" size={20} />
            <span>{destination.location}</span>
            <span className="mx-2">•</span>
            <Clock className="text-amber-400" size={20} />
            <span>{destination.duration}</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
            <Tag size={16} />
            {destination.price} per person
          </div>
        </div>
      </section>

      {/* Overview & Booking */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left: Details */}
            <div className="lg:col-span-2">
              <div
                id="overview"
                className={`transition-all duration-700 ${
                  isVisible["overview"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                  About This Package
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  {destination.description}
                </p>
              </div>

              {/* Highlights */}
              <div
                id="highlights"
                className={`transition-all duration-700 ${
                  isVisible["highlights"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-5">
                  Package Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-slate-50 rounded-xl p-4"
                    >
                      <CheckCircle
                        className="text-amber-600 mr-3 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div
                id="inclusions"
                className={`transition-all duration-700 ${
                  isVisible["inclusions"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-5">
                  What's Included
                </h3>
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-10">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {destination.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          className="text-green-600 mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Itinerary */}
              <div
                id="itinerary"
                className={`transition-all duration-700 ${
                  isVisible["itinerary"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
<div className="flex items-center gap-3 mb-8">
                  <h3 className="text-2xl font-bold text-slate-800">
                    Detailed Itinerary
                  </h3>
                  <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {destination.itinerary.length} Days
                  </span>
                </div>
<div className="relative">
                  {/* Accordion (mobile & tablet) */}
                  <div className="lg:hidden space-y-3">
                    {destination.itinerary.map((item, index) => {
                      const Icon = iconMap[item.icon] || Plane;
                      return (
                        <DayAccordion
                          key={index}
                          item={item}
                          index={index}
                          Icon={Icon}
                          highlightTime={highlightTimes[index]}
                          isOpen={openDay === index}
                          onToggle={() =>
                            setOpenDay(openDay === index ? null : index)
                          }
                        />
                      );
                    })}
                  </div>

                  {/* Card grid (desktop) */}
                  <div className="hidden lg:grid grid-cols-2 gap-8">
                    {destination.itinerary.map((item, index) => {
                      const Icon = iconMap[item.icon] || Plane;
                      return (
                        <DayCard
                          key={index}
                          item={item}
                          index={index}
                          Icon={Icon}
                          highlightTime={highlightTimes[index]}
                        />
                      );
                    })}
                  </div>

                  {/* Single CTA for the itinerary section */}
                  <div className="mt-10 text-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-amber-200"
                    >
                      Book This Package Now
                      <ChevronRight size={20} />
                    </Link>
                    <p className="mt-3 text-sm text-slate-500">
                      Free consultation — our experts will craft your perfect
                      itinerary.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  {confirmed ? (
                    <div className="text-center py-8">
                      <CheckCircle
                        className="text-green-400 mx-auto mb-4"
                        size={48}
                      />
                      <h3 className="text-white text-xl font-bold mb-2">
                        Booking Request Sent!
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Scroll up to see your confirmation details.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-white text-2xl font-bold mb-2">
                        Book This Package
                      </h3>
                      <p className="text-gray-300 text-sm mb-6">
                        Fill in your details and our team will confirm your
                        reservation.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">
                            Full Name
                          </label>
                          <div className="relative">
                            <User
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="text"
                              name="name"
                              value={booking.name}
                              onChange={handleChange}
                              required
                              placeholder="Enter your full name"
                              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-amber-500 placeholder-gray-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="email"
                              name="email"
                              value={booking.email}
                              onChange={handleChange}
                              required
                              placeholder="you@example.com"
                              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-amber-500 placeholder-gray-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="tel"
                              name="phone"
                              value={booking.phone}
                              onChange={handleChange}
                              required
                              placeholder="+880 1XXX-XXXXXX"
                              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-amber-500 placeholder-gray-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">
                            Preferred Travel Date
                          </label>
                          <div className="relative">
                            <Calendar
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="date"
                              name="date"
                              value={booking.date}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-amber-500 [color-scheme:dark]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">
                            Number of Travelers
                          </label>
                          <div className="relative">
                            <Users
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <select
                              name="travelers"
                              value={booking.travelers}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-amber-500 appearance-none"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                <option key={n} value={n} className="bg-slate-800">
                                  {n} {n === 1 ? "Traveler" : "Travelers"}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">
                            Special Requests
                          </label>
                          <div className="relative">
                            <MessageSquare
                              className="absolute left-3 top-3 text-gray-400"
                              size={18}
                            />
                            <textarea
                              name="message"
                              value={booking.message}
                              onChange={handleChange}
                              rows={3}
                              placeholder="Any specific requirements..."
                              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:outline-none focus:border-amber-500 placeholder-gray-400 resize-none"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors duration-300 shadow-lg"
                        >
                          Confirm Booking
                        </button>

                        <div className="flex items-start gap-2 text-gray-400 text-xs">
                          <Shield className="flex-shrink-0 mt-0.5" size={16} />
                          <p>
                            Secure booking. No payment is required now — our
                            team will contact you to complete the reservation.
                          </p>
                        </div>
                      </div>
                    </form>
                  )}
                </div>

                {/* Other packages */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">
                    Other Packages
                  </h4>
                  <div className="space-y-4">
                    {destinations
                      .filter((d) => d.id !== destination.id)
                      .map((d) => (
                        <Link
                          key={d.id}
                          href={`/packages/${d.id}`}
                          className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-3 hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={d.image}
                            alt={d.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-bold text-slate-800">
                              {d.name}
                            </p>
                            <p className="text-amber-600 font-semibold text-sm">
                              {d.price}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our travel experts are ready to design your perfect itinerary.
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
                  An IATA-accredited agent is a travel agency or professional
                  authorized by the International Air Transport Association to
                  issue airline tickets and access airline systems directly.
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
