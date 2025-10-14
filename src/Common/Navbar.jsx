import React, { useState } from 'react';
import logo from '../assets/Favicon/logo.png';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setMenuVisible(true), 10);
    } else {
      setMenuVisible(false);
      setTimeout(() => setIsOpen(false), 300); // wait for animation
    }
  };

  const specialties = [
    { label: "OB GYN", slug: "ob-gyn" },
    { label: "Dental Billing", slug: "dental-billing" },
    { label: "Chiropractic Billing", slug: "chiropractic-billing" },
    { label: "Hematology Billing", slug: "hematology-billing" },
    { label: "Orthopedic Billing", slug: "orthopedic-billing" },
    { label: "Mental Health", slug: "mental-health" },
    { label: "General Surgery", slug: "general-surgery" },
    { label: "Urology", slug: "urology" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Top Bar */}
        <div className="w-full bg-[#7BAB0A] text-white text-sm px-4 py-2 shadow-sm font-medium tracking-wide">
          <div className="mx-auto max-w-screen-xl flex justify-between">
            <div>Email: info@instantbillings.com</div>
            <div>Business hours: 9:00 to 5:00 | Monday to Friday</div>
          </div>
        </div>


        {/* Desktop Navbar */}
        <header className="w-full">
          <div className="hidden md:block w-full bg-white/10 backdrop-blur-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 rounded-xl">
              <div className="flex h-16 items-center justify-between">
                <Link to="/">
                  <img src={logo} alt="Logo" className="h-14" />
                </Link>

                <div className="bg-white shadow-md pt-4 md:px-36 px-4 pb-4 rounded-b-2xl border border-gray-100">
                  <nav aria-label="Global">
                    <ul className="flex items-center gap-8 text-md relative">
                      <li>
                        <Link to="/" className="text-gray-600 hover:text-[#7BAB0A] relative group transition-all duration-300">
                          Who We Are
                          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#7BAB0A] group-hover:w-full transition-all duration-500"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Blogpage" className="text-gray-600 hover:text-[#7BAB0A] relative group transition-all duration-300">
                          Blogs
                          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#7BAB0A] group-hover:w-full transition-all duration-500"></span>
                        </Link>
                      </li>

                      <div
                        className="relative"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                      >
                        <span className="text-gray-600 hover:text-[#7BAB0A] relative group cursor-pointer transition-all duration-300 flex items-center gap-1">
                          Specialties
                          <FaChevronDown />
                          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#7BAB0A] group-hover:w-full transition-all duration-500"></span>
                        </span>

                        {showDropdown && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 mt-[1px] w-[700px] backdrop-blur-md bg-white/90 shadow-2xl border border-gray-200 rounded-2xl p-6 z-50 grid grid-cols-2 gap-4">
                            {specialties.map((item, i) => (
                              <Link
                                key={i}
                                to={`/specialties/${item.slug}`}
                                className="text-gray-700 hover:text-[#7BAB0A] transition-all border-l-4 border-transparent hover:border-[#7BAB0A] pl-3 py-1 text-left"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                    </ul>
                  </nav>
                </div>

                <Link to="/contact">
                  <span className="hidden md:block rounded-lg bg-[#7BAB0A] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#3f5213] transition-all duration-300">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden bg-white/10 backdrop-blur-md shadow-sm px-4 py-4 flex justify-between items-center">
            <button
              onClick={toggleMenu}
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-10" />
              <span className="text-base font-bold text-gray-800">Instant Medical Billing</span>
            </div>

            <Link to="/contact">
              <span className="bg-[#7BAB0A] px-3 py-2 rounded text-white text-sm font-medium shadow hover:bg-[#3f5213] transition-all duration-300">
                Contact
              </span>
            </Link>
          </div>

          {/* Sidebar Mobile Menu with Animation */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black opacity-30"
                onClick={toggleMenu}
              ></div>

              {/* Sidebar */}
              <div
                className={`w-72 text-left max-w-full bg-white shadow-xl h-full overflow-y-auto transition-transform duration-300 transform ${menuVisible ? 'translate-x-0' : '-translate-x-full'
                  } p-6 space-y-4 text-base font-medium relative`}
              >
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
                  aria-label="Close Menu"
                >
                  &times;
                </button>

                <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-[#7BAB0A] mt-8">
                  Who We Are
                </Link>

                <Link to="/Blogpage" onClick={toggleMenu} className="block text-gray-700 hover:text-[#7BAB0A]">
                  Blog
                </Link>

                {/* Specialties Dropdown */}
                <div>
                  <button
                    onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                    className="w-full flex justify-between items-center text-gray-700 hover:text-[#7BAB0A] focus:outline-none"
                  >
                    <span>Specialties</span>
                    <FaChevronDown className={`transition-transform duration-300 ${showMobileDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showMobileDropdown && (
                    <div className="mt-2 pl-4 space-y-2">
                      {specialties.map((item, i) => (
                        <Link
                          key={i}
                          to={`/specialties/${item.slug}`}
                          onClick={() => {
                            toggleMenu();
                            setShowMobileDropdown(false);
                          }}
                          className="block text-gray-600 hover:text-[#7BAB0A] transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>


              </div>
            </div>
          )}
        </header>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[96px]"></div>
    </>
  );
};

export default Navbar;
