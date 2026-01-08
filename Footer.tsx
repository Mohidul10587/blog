"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-blue-800 to-purple-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* About Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">My Blog</h2>
          <p className="text-gray-200 max-w-sm">
            Sharing knowledge, tips, and tutorials about web development and
            tech.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex space-x-10 mb-6 md:mb-0">
          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-gray-200">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-gray-200">
              <li>
                <Link href="/docs" className="hover:text-white transition">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-white transition">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-white text-xl">
            <Link
              href="https://facebook.com"
              className="hover:text-gray-300 transition"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-gray-300 transition"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://github.com"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
