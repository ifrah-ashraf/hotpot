"use client";
import React, { useState, useEffect } from "react";
import {
  Building,
  CreditCard,
  PiggyBank,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Users,
  Shield,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    features: false,
    testimonials: false,
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      services: true,
      features: true,
      testimonials: true,
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote:
        "Federal Bank helped me secure funding for my business when other banks turned me away. Their personalized service made all the difference.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote:
        "The mortgage process was seamless with Federal Bank. Their team guided me through every step, making my first home purchase stress-free.",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Student",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote:
        "As a student, I appreciate Federal Bank's zero-fee checking account and their intuitive mobile banking app. It's perfect for my needs.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Personal Banking",
      icon: <CreditCard className="w-12 h-12 text-blue-600" />,
      description:
        "Manage your finances with our comprehensive personal banking solutions including checking, savings, and investment accounts.",
    },
    {
      id: 2,
      title: "Business Banking",
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      description:
        "Grow your business with our tailored financial solutions, from business loans to merchant services and cash management.",
    },
    {
      id: 3,
      title: "Savings & Investments",
      icon: <PiggyBank className="w-12 h-12 text-blue-600" />,
      description:
        "Build your wealth with our range of savings accounts, CDs, retirement plans, and investment opportunities.",
    },
  ];

  const heroSlides = [
    {
      id: 1,
      title: "Banking Made Simple",
      subtitle:
        "Experience seamless financial solutions tailored to your needs",
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      cta: "Open an Account",
    },
    {
      id: 2,
      title: "Secure Your Future",
      subtitle: "Smart investments and savings plans for your financial goals",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Options",
    },
    {
      id: 3,
      title: "Business Solutions",
      subtitle: "Empowering businesses with innovative financial tools",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      cta: "Learn More",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="ml-2 text-xl font-bold text-blue-800">
                  Federal Bank
                </span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a
                  href="#"
                  className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </a>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              <Link href="/Auth/Login">
                {" "}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Login
                </button>
              </Link>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Products
            </a>
            <a
              href="#about"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex-grow transition-colors duration-200">
                Online Banking
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <div
        className={`relative pt-16 overflow-hidden transition-opacity duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "600px" }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1
                  className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 transition-all duration-700 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-xl sm:text-2xl text-white mb-8 transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <button
                  className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-700 delay-400 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-10" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">
                Online Banking
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Access your accounts anytime, anywhere with our secure online
              banking platform.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Login Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <PiggyBank className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">
                Savings Calculator
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Plan your financial future with our easy-to-use savings and
              investment calculators.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">
                Business Solutions
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Discover tailored financial solutions to help your business thrive
              and grow.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section
        id="services"
        className={`py-16 transition-all duration-1000 ${
          isVisible.services
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Banking Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Comprehensive financial solutions tailored to meet your unique
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-600 text-center">
                    {service.description}
                  </p>
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section
        className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-100 transition-all duration-1000 ${
          isVisible.features
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Federal Bank
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Experience banking excellence with our innovative features and
              dedicated service.
            </p>
          </div>

          <div className="mt-12">
            <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab(0)}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  activeTab === 0
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Digital Banking
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  activeTab === 1
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Security
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  activeTab === 2
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Customer Support
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 0 ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Modern Digital Banking
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Experience banking at your fingertips with our
                      state-of-the-art mobile and online banking platforms.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          24/7 account access from anywhere in the world
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Instant transfers and bill payments
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Mobile check deposit with immediate confirmation
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Personalized financial insights and budgeting tools
                        </p>
                      </li>
                    </ul>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200">
                      Download Our App
                    </button>
                  </div>
                  <div className="md:w-1/2 bg-blue-600">
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Digital Banking"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 1 ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Bank-Grade Security
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Your security is our top priority. We employ advanced
                      encryption and multi-factor authentication to keep your
                      accounts safe.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          256-bit encryption for all transactions
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Biometric authentication options
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Real-time fraud monitoring and alerts
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Zero liability protection for unauthorized
                          transactions
                        </p>
                      </li>
                    </ul>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200">
                      Learn About Security
                    </button>
                  </div>
                  <div className="md:w-1/2 bg-blue-600">
                    <img
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Security"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 2 ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      24/7 Customer Support
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Our dedicated team is always ready to assist you with any
                      banking needs or questions you may have.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Round-the-clock phone support
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Live chat with banking specialists
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Personalized financial consultations
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          Extensive knowledge base and video tutorials
                        </p>
                      </li>
                    </ul>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200">
                      Contact Support
                    </button>
                  </div>
                  <div className="md:w-1/2 bg-blue-600">
                    <img
                      src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Customer Support"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`py-16 transition-all duration-1000 ${
          isVisible.testimonials
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Don't just take our word for it — hear from our satisfied
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="mt-6 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="mt-2 text-blue-100">Years of Service</div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white">500K+</div>
              <div className="mt-2 text-blue-100">Happy Customers</div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white">200+</div>
              <div className="mt-2 text-blue-100">Branches Nationwide</div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white">$50B+</div>
              <div className="mt-2 text-blue-100">Assets Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to experience better banking?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Federal Bank
            their trusted financial partner.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium mr-4 transition-colors duration-200">
              Open an Account
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Building className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Federal Bank</span>
              </div>
              <p className="mt-4 text-gray-400">
                Your trusted financial partner since 1972. Providing innovative
                banking solutions for individuals and businesses.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Banking Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Personal Banking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Business Banking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Loans & Mortgages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Credit Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Investments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Insurance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">
                    123 Banking Street, Financial District, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">+1 (800) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">
                    support@federalbank.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Federal Bank. All rights
              reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
