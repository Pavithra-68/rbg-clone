import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiFileText,
  FiShield,
  FiMic,
  FiGlobe,
  FiHeadphones,
  FiCheckSquare,
} from "react-icons/fi";

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">γβδ</span>
          <span className="font-bold text-blue-600">RBG.AI</span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8 text-gray-700">

          <Link to="/">Home</Link>

          {/* PRODUCTS */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button>Products</button>

            {productsOpen && (
              <div className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-xl p-3">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <FiFileText className="text-blue-600" />
                  <span>MLStack</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <FiShield className="text-blue-600" />
                  <span>MLOps</span>
                </div>
              </div>
            )}
          </div>

          {/* SOLUTIONS */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button>Solutions</button>

            {solutionsOpen && (
              <div className="absolute top-8 left-0 w-80 bg-white shadow-lg rounded-xl p-4">
                
                <DropdownItem
                  icon={<FiFileText />}
                  title="Deed Parser"
                  desc="Information Extraction"
                />

                <DropdownItem
                  icon={<FiShield />}
                  title="Captcha Solver"
                  desc="Auditing"
                />

                <DropdownItem
                  icon={<FiMic />}
                  title="DHVANI"
                  desc="Voice Recognition"
                />

                <DropdownItem
                  icon={<FiGlobe />}
                  title="DHVANI-Core"
                  desc="Speech Translation"
                />

                <DropdownItem
                  icon={<FiHeadphones />}
                  title="Know Voice"
                  desc="Post Call Analytics"
                />

                <DropdownItem
                  icon={<FiCheckSquare />}
                  title="Answer Sheet"
                  desc="Information Extraction"
                />

              </div>
            )}
          </div>

          <Link to="/research">Research</Link>
          <Link to="/about">About</Link>

          <Link to="/contact" className="text-blue-600 font-medium">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* Reusable dropdown item */
function DropdownItem({ icon, title, desc }) {
  return (
    <div className="flex gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
      <div className="text-blue-600 text-lg mt-1">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
