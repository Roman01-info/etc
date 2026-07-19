"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
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
                className="text-slate-700 hover:text-amber-600 transition-colors"
              >
                About
              </Link>
              <Link href="/gallery" className="text-amber-600 font-semibold">
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
                  className="text-slate-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  className="text-amber-600 font-semibold"
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
              "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-amber-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our World in <span className="text-amber-400">Pictures</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto px-4">
            A collection of beautiful moments and stunning destinations curated for your inspiration.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="gallery-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["gallery-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Memories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Family Tour Memories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Real moments from our clients exploring the world together. Sneak a peek at the joy we help create across stunning destinations.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              "/gallery/etc-2.jpeg",
              "/gallery/etc-3.jpeg",
              "/gallery/etc-4.jpeg",
              "/gallery/etc-6.jpeg",
              "/gallery/etc-7.jpeg",
              "/gallery/Biplop-1.jpeg",
            ].map((imgSrc, index) => (
              <div
                key={index}
                id={`gallery-img-${index}`}
                className={`relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-700 break-inside-avoid ${
                  isVisible[`gallery-img-${index}`]
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index % 3) * 150}ms` }}
              >
                <img
                  src={imgSrc}
                  alt={`Memorable Tour ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out bg-slate-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg mb-1">Joyful Escapes</p>
                      <p className="text-amber-300 text-sm font-medium">Family Package</p>
                    </div>
                    <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md transform hover:scale-110 transition-transform">
                      <Heart className="text-white" size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to be in our gallery?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your next adventure with us and create your own unforgettable memories.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Us Now
            <ChevronRight className="inline ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IATA Accreditation Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-900 rounded-2xl p-6 mb-8 border border-slate-800">
            <Image
              src="/gallery/etc_main_logo (3).png"
              alt="IATA Accredited Agent"
              width={120}
              height={70}
              className="h-16 w-auto object-contain flex-shrink-0"
            />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              An IATA-accredited agent is a travel agency or professional authorized by the International Air Transport Association to issue airline tickets and access airline systems directly.
            </p>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Elevated Travel Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
