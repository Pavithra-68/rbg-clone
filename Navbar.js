import React, { useState } from 'react';

const NavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-1 hover:text-blue-600 font-medium py-2">
        {title} <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-3 mt-1 animate-in fade-in slide-in-from-top-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group/item">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{item.name}</div>
                <div className="text-[10px] text-slate-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xl italic font-serif text-slate-700">γβδ</span>
        <span className="text-xl font-bold tracking-tighter">RBG.AI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
        <a href="#" className="bg-slate-100 px-3 py-1 rounded-md text-slate-900 font-medium">Home</a>
        <NavItem title="Products" items={[
          {name: "MLStack", desc: "ML API Microservices", icon: "📦"},
          {name: "MLloOps", desc: "Human-AI Collaboration", icon: "🔄"}
        ]} />
        <NavItem title="Solutions" items={[
          {name: "Deed Parser", desc: "Information Extraction", icon: "📄"},
          {name: "DHVANI", desc: "Voice Recognition", icon: "🎙️"}
        ]} />
        <a href="#" className="hover:text-blue-600">Research</a>
        <a href="#" className="hover:text-blue-600">About</a>
      </div>

      <button className="text-blue-600 font-bold text-sm hover:underline">Get Started</button>
    </nav>
  );
}