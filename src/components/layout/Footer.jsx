import { Link } from "react-router";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Image from "../ui/Image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/track", label: "Track Parcel" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

const companyLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Choose Us" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16">
      <Container className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Image className="h-20 w-auto" src="/images/logo-footer.png" alt="logo" />
          <Paragraph className="my-5 text-white/60 max-w-sm">
            Reliable parcel tracking and delivery management, built for speed
            and transparency.
          </Paragraph>

          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <Heading as={5} className="text-white mb-4">
            Quick Links
          </Heading>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <Heading as={5} className="text-white mb-4">
            Company
          </Heading>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <Heading as={5} className="text-white mb-4">
            Contact
          </Heading>
          <ul className="flex flex-col gap-3 text-white/60">
            <li>support@boxdrop.com</li>
            <li>+880 1234-567890</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 mt-12">
        <Container className="py-6! flex flex-col md:flex-row justify-between items-center gap-3">
          <Paragraph className="text-white/50 text-sm">
            © {new Date().getFullYear()} BoxDrop. All rights reserved.
          </Paragraph>
          <Paragraph className="text-white/50 text-sm">
            Design and Developed by Nirob
          </Paragraph>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
