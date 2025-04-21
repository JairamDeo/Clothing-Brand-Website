import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown } from 'lucide-react';
import CategoryDrawer from './CategoryDrawer';
import SearchBar from './SearchBar';
import logo from '../assets/logo.jpg'; // ✅ Import logo image

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [activeCategoryDrawer, setActiveCategoryDrawer] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const navCategories = [
    { name: 'Ladies', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Kids', path: '/kids' },
    { name: 'Home', path: '/home' }
  ];

  const secondaryLinks = ['Customer Service', 'Newsletter', 'Find a store'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
    if (activeCategoryDrawer) setActiveCategoryDrawer(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
    if (activeCategoryDrawer) setActiveCategoryDrawer(null);
  };

  const openDrawer = () => {
    setActiveCategoryDrawer('Ladies');
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="text-sm">
      <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 w-full z-40 h-auto">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-24">
            {isMobile ? (
              <div className="flex mx-auto">
                <Link to="/" className="flex items-center">
                  <img src={logo} alt="RANJAYA Logo" className="w-[200px] h-[50px] object-fit" />
                </Link>
              </div>
            ) : (
              <div className="flex items-center">
                <button id="menu-button" onClick={openDrawer} className="p-2 mr-2">
                  <Menu size={24} />
                </button>
                <Link to="/" className="flex items-center">
                  <img src={logo} alt="RANJAYA Logo" className="w-[200px] h-[50px] object-fit " />
                </Link>
              </div>
            )}

            <nav id="nav-links" className="hidden md:flex space-x-8 mx-8 flex-grow justify-center">
              {navCategories.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`hover:underline underline-offset-4 whitespace-nowrap py-5 font-medium ${
                    isActive(item.path)
                      ? 'text-black font-semibold underline decoration-2'
                      : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                onClick={toggleSearch}
                className="p-1 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <Search size={20} />
              </button>
              <Link
                to="/signin"
                className={`p-1 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center ${
                  isMobile ? '' : 'hidden md:flex'
                }`}
              >
                <User size={20} />
              </Link>
              <Link
                to="#"
                className={`p-1 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center ${
                  isMobile ? '' : 'hidden md:flex'
                }`}
              >
                <Heart size={20} />
              </Link>
              <Link
                to="#"
                className="p-1 relative hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
              {isMobile && (
                <button
                  id="menu-button"
                  onClick={openDrawer}
                  className="p-1 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <Menu size={20} />
                </button>
              )}
            </div>
          </div>

          {isMobile && (
            <div className="flex justify-center overflow-x-auto py-2 border-t border-gray-100">
              <nav className="flex space-x-6">
                {navCategories.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`whitespace-nowrap text-xs font-medium px-1 ${
                      isActive(item.path)
                        ? 'text-black font-semibold underline decoration-2 underline-offset-4'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>

      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} isMobile={isMobile} />

      {isMenuOpen && isMobile && (
        <div className="bg-white fixed inset-0 z-50 overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
              <img src={logo} alt="RANJAYA Logo" className="w-[190px] h-auto object-contain" />
              <Link to="#" className="p-1 relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            <div className="flex flex-col space-y-1">
              {navCategories.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex justify-between items-center py-3 px-2 border-b border-gray-100 w-full ${
                      isActive(item.path) ? 'text-black font-semibold' : 'text-gray-600'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown size={16} />
                  </Link>
                </div>
              ))}

              <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-2 py-2">
                  <User size={20} />
                  <span>Sign in</span>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <Heart size={20} />
                  <span>Favorites</span>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  {secondaryLinks.map((link) => (
                    <Link key={link} to="#" className="block py-2">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CategoryDrawer
        activeCategoryDrawer={activeCategoryDrawer}
        setActiveCategoryDrawer={setActiveCategoryDrawer}
        navCategories={navCategories}
        windowWidth={windowWidth}
        isMobile={isMobile}
      />
    </div>
  );
}
