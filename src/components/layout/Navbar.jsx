import { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiUser, FiGrid, FiLogOut } from "react-icons/fi";
import Container from "../ui/Container";
import { useAuth } from "../../hooks/useAuth";
import Image from "../ui/Image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/track", label: "Track Parcel" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Choose Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-999 w-full bg-white text-primary py-3">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Image
              src="/images/nav-logo.png"
              className="h-16 w-auto"
              alt="logo"
            />
          </Link>

          {/* Navigation Links */}
          <ul
            className={`fixed lg:static top-0 h-screen lg:h-auto w-4/5 lg:w-auto flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 bg-primary lg:bg-transparent text-white lg:text-inherit p-6 lg:p-0 transition-[left] duration-300 flex ${
              isMenuOpen ? "left-0" : "-left-full lg:left-auto"
            }`}
          >
            <li className="lg:hidden">
              <Link to="/">
                <Image
                  src="/images/logo-footer.png"
                  className="h-16 w-auto"
                  alt="logo"
                />
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-block py-2 font-medium hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Auth section */}
            <li>
              {user ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent cursor-pointer"
                  >
                    <FiUser className="text-lg" />
                  </button>

                  {isProfileOpen && (
                    <div className="static lg:absolute lg:right-0 lg:top-12 lg:w-48 rounded-md border border-secondary/10 bg-white text-primary shadow-sm mt-3 lg:mt-0">
                      {user.role === "admin" && (
                        <Link
                          to="/admin"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-secondary/5"
                        >
                          <FiGrid />
                          Admin Dashboard
                        </Link>
                      )}

                      {user.role !== "admin" && (
                        <Link
                          to="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-secondary/5"
                        >
                          <FiGrid />
                          Dashboard
                        </Link>
                      )}

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-red-500 hover:bg-red-50 cursor-pointer"
                      >
                        <FiLogOut />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-accent text-white px-5 py-2 rounded"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden h-8 w-8 text-2xl flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
