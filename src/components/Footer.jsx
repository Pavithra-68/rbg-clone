export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">RBG.AI</h3>
          <p className="text-sm text-gray-600 mb-4">
            Empowering modern workflows with secure, precise,
            and scalable AI-driven automation.
          </p>
          <p className="text-sm">contact@rbg.ai</p>
          <p className="text-sm">+91-73391-03001</p>
          <p className="text-sm">India</p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>MLStack</li>
            <li>MLOps</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Deed Parser</li>
            <li>Captcha Solver</li>
            <li>DHVANI</li>
            <li>DHVANI-Core</li>
            <li>Know Voice</li>
            <li>Answer Sheet</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Research</li>
            <li>Contact</li>
            <li>E-Connect Portal</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © 2021 - 2026 RBG.AI. All rights reserved.
      </div>
    </footer>
  );
}
