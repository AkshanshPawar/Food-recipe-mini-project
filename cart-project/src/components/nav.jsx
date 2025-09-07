import { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
        <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
            {/* Logo */}
            <h1 className="text-xl font-bold">MyWebsite</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-lg">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">About</li>
            <li className="hover:text-gray-200 cursor-pointer">Services</li>
            <li className="hover:text-gray-200 cursor-pointer">Contact</li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Mobile Menu */}
        {open && (
            <ul className="flex flex-col items-center bg-blue-700 md:hidden py-4 space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
        )}
        </nav>
  );
}
