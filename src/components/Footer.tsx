const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-1.5 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-garden-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-garden-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-garden-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-garden-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-garden-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Add other footer columns here if needed */}

        </div>

        <div className="border-t border-gray-800 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © 2024 CHOCKS Projects & Constructions (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0 text-xs">
            <a href="#" className="text-gray-400 hover:text-garden-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-garden-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
