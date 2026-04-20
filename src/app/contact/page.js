"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@etctravel.com", "support@etctravel.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Luxury Avenue", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9AM - 8PM", "Sat - Sun: 10AM - 6PM"],
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
              <Link
                href="/about"
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                About
              </Link>
              <Link href="/contact" className="text-amber-600 font-semibold">
                Contact
              </Link>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
                Book Now
              </button>
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
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-amber-600 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button
                  className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions or ready to plan your dream vacation? We're here to
            help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                id={`contact-card-${index}`}
                className={`bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 ${
                  isVisible[`contact-card-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-amber-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                  {info.title}
                </h3>
                <div className="text-center">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              id="contact-form"
              className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ${
                isVisible["contact-form"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-slate-700 font-semibold mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 font-semibold mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-slate-700 font-semibold mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-slate-700 font-semibold mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-700 font-semibold mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 text-white py-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div
              id="contact-map"
              className={`transition-all duration-700 ${
                isVisible["contact-map"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Visit Our Office
                </h2>
                <div className="bg-slate-200 rounded-xl h-80 mb-6 flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <MapPin size={48} className="mx-auto mb-4 text-amber-600" />
                    <p className="text-lg font-semibold">123 Luxury Avenue</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-slate-100 p-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">f</span>
                    </a>
                    <a
                      href="#"
                      className="bg-slate-100 p-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">𝕏</span>
                    </a>
                    <a
                      href="#"
                      className="bg-slate-100 p-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">📷</span>
                    </a>
                    <a
                      href="#"
                      className="bg-slate-100 p-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="faq-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["faq-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I book a trip with ETC?",
                answer:
                  "You can book by contacting us through phone, email, or by filling out the contact form above. Our travel advisors will guide you through the entire process.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "Cancellation policies vary depending on the service booked. We offer flexible cancellation options and will work with you to find the best solution.",
              },
              {
                question: "Do you offer travel insurance?",
                answer:
                  "Yes, we provide comprehensive travel insurance packages that cover medical emergencies, trip cancellations, and other unexpected events.",
              },
              {
                question: "Can I customize my travel itinerary?",
                answer:
                  "Absolutely! We specialize in personalized travel experiences. Our advisors will work with you to create an itinerary that matches your preferences.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                id={`faq-${index}`}
                className={`bg-slate-50 p-6 rounded-xl transition-all duration-700 ${
                  isVisible[`faq-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
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
