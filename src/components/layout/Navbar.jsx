import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaBars, FaXmark } from "react-icons/fa6";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/track", label: "Track Parcel" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Choose Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-999 transition-all duration-300 py-4 lg:pt-8 ${
        isScrolling ? "bg-primary text-white py-3!" : "bg-white text-primary"
      }`}
    >
      <Container className="py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <Heading as={4} className="text-inherit">
              BoxDrop
            </Heading>
          </Link>

          {/* Navigation Links */}
          <ul
            className={`fixed lg:static top-0 h-screen lg:h-auto w-4/5 lg:w-auto flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 bg-primary lg:bg-transparent text-white lg:text-inherit p-6 lg:p-0 transition-[left] duration-300 font-semibold lg:font-normal text-base flex ${
              isMenuOpen ? "left-0" : "-left-full lg:left-auto"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-block py-2 font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-accent text-white px-4 py-2 rounded-md"
              >
                Login
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
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
