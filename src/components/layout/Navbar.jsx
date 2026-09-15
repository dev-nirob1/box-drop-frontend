
import { useState } from "react";

import { NavLink, Link } from "react-router";

import { FaBars, FaXmark } from "react-icons/fa6";
import { FiUser, FiLogOut } from "react-icons/fi";

import Container from "../ui/Container";
import Image from "../ui/Image";

import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useAuth();

  const dashboardPath =
    user?.role === "admin" ? "/admin" : "/dashboard";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/track", label: "Track Parcel" },
  ];

  if (user) {
    navLinks.push({
      href: dashboardPath,
      label: "Dashboard",
    });
  }

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-999 w-full bg-white py-3 text-primary">
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

          {/* Navigation */}
          <ul
            className={`fixed top-0 flex h-screen w-4/5 flex-col items-start gap-4 bg-primary p-6 text-white transition-[left] duration-300 lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:p-0 lg:text-inherit ${
              isMenuOpen ? "left-0" : "-left-full lg:left-auto"
            }`}
          >
            {/* Mobile Logo */}
            <li className="lg:hidden">
              <Image
                src="/images/logo-footer.png"
                className="h-16 w-auto"
                alt="logo"
              />
            </li>

            {/* Links */}
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `relative inline-block py-2 font-medium transition-colors duration-300 hover:text-accent ${
                      isActive ? "text-accent" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

           {/* Auth */}
<li>
  {user ? (
    <div className="flex items-center gap-3">
      {/* Profile — static display, no link */}
      <div className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-2">
        <FiUser />
        <span className="text-sm font-medium">{user.name}</span>
      </div>

      {/* Logout */}
      <button
        type="button"
        onClick={handleLogout}
        className="flex cursor-pointer items-center gap-2 rounded bg-accent px-4 py-2 text-sm text-white transition-opacity hover:opacity-80"
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  ) : (
    <Link
      to="/login"
      onClick={() => setIsMenuOpen(false)}
      className="rounded bg-accent px-5 py-2 text-white transition-opacity hover:opacity-80"
    >
      Login
    </Link>
  )}
</li>
          </ul>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-2xl lg:hidden"
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

