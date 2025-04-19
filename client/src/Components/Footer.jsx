import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [expandedSections, setExpandedSections] = useState({});
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < 768;
  
  const footerSections = [
    {
      title: 'SHOP',
      links: [
        { name: 'Ladies', path: '/' },
        { name: 'Men', path: '/men' },
        { name: 'Kids', path: '/kids' },
        { name: 'H&M HOME', path: '/home' },
        { name: 'Gift Cards', path: '/gift-cards' },
        { name: 'Download the H&M App', path: '/app' }
      ]
    },
    {
      title: 'CORPORATE INFO',
      links: [
        { name: 'Career at H&M', path: '/careers' },
        { name: 'About H&M', path: '/about' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Investor Relations', path: '/investors' },
        { name: 'Corporate Governance', path: '/governance' }
      ]
    },
    {
      title: 'HELP',
      links: [
        { name: 'Customer Service', path: '/customer-service' },
        { name: 'My Account', path: '/my-account' },
        { name: 'Store Locator', path: '/stores' },
        { name: 'Legal & Privacy', path: '/legal' },
        { name: 'Contact', path: '/contact' },
        { name: 'Report a Scam', path: '/report-scam' }
      ]
    }
  ];
  
  const socialIcons = [
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/hm' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/hm/' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/hm' },
    { icon: Youtube, name: 'YouTube', url: 'https://www.youtube.com/user/hennesandmauritz' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/h&m' }
  ];
  
  const toggleSection = (title) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };
  
  // External link handler with safety check
  const handleExternalLink = (e, url) => {
    e.preventDefault();
    if (url && url.startsWith('https://')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <footer className="bg-white text-black font-sans border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg md:text-xl font-semibold mb-2">BECOME A MEMBER</h4>
              <p className="text-sm md:text-base text-gray-700">
                Join now and get 10% off your first purchase.
              </p>
            </div>
            <button className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors duration-300 uppercase text-sm font-medium">
              Join Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="container mx-auto px-4 md:px-8 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
          {footerSections.map((section, index) => (
            <div 
              key={section.title} 
              className="mb-1 md:mb-8"
              data-aos="fade-up" 
              data-aos-delay={100 * index}
            >
              {isMobile ? (
                // Mobile accordion style
                <div className="border-b border-gray-200">
                  <button 
                    className="flex justify-between items-center w-full py-4 text-left"
                    onClick={() => toggleSection(section.title)}
                  >
                    <h4 className="font-semibold text-sm">{section.title}</h4>
                    {expandedSections[section.title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  
                  {expandedSections[section.title] && (
                    <div className="pb-4">
                      {section.links.map(link => (
                        <Link 
                          key={link.name} 
                          to={link.path} 
                          className="block py-2 text-gray-600 text-sm hover:text-black transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Desktop column style
                <div>
                  <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
                  <ul>
                    {section.links.map(link => (
                      <li key={link.name} className="mb-2">
                        <Link 
                          to={link.path} 
                          className="text-gray-600 text-sm hover:text-black hover:underline transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          
          {/* Social Icons Column */}
          <div 
            className="mt-6 md:mt-0" 
            data-aos="fade-up" 
            data-aos-delay={300}
          >
            <h4 className="font-semibold text-sm mb-4 hidden md:block">SOCIAL MEDIA</h4>
            <div className="flex flex-wrap space-x-4">
              {socialIcons.map((item) => (
                <a 
                  key={item.name} 
                  href={item.url}
                  onClick={(e) => handleExternalLink(e, item.url)}
                  className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={item.name}
                  rel="noopener noreferrer"
                >
                  <item.icon size={20} className="text-gray-800" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Legal Section */}
      <div className="bg-gray-50 py-6" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.</p>
            </div>
            <div>
              <p>H&M's business concept is to offer fashion and quality at the best price in a sustainable way.</p>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-400">
            <p>© H&M {new Date().getFullYear()} | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;