import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown } from 'lucide-react';
import CategoryDrawer from './CategoryDrawer';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [activeCategoryDrawer, setActiveCategoryDrawer] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Check screen size and set window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  // Navigation categories with their routes
  const navCategories = [
    { name: 'Ladies', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Kids', path: '/kids' },
    { name: 'H&M HOME', path: '/home' }
  ];

  const secondaryLinks = ['Customer Service', 'Newsletter', 'Find a store'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
    // Close category drawer when mobile menu is toggled
    if (activeCategoryDrawer) setActiveCategoryDrawer(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
    // Close category drawer when search is toggled
    if (activeCategoryDrawer) setActiveCategoryDrawer(null);
  };
  
  

  const openDrawer = () => {
    // Default to 'Ladies' category when opening the drawer
    setActiveCategoryDrawer('Ladies');
    // Close mobile menu if it's open
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Check if current location path matches the nav item path
  const isActive = (path) => location.pathname === path;

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      // Redirect user based on search query
      if (searchQuery.toLowerCase() === 'men') {
        navigate('/men');
      } else if (searchQuery.toLowerCase() === 'kids') {
        navigate('/kids');
      } else if (searchQuery.toLowerCase() === 'ladies') {
        navigate('/');
      } else if (searchQuery.toLowerCase() === 'home') {
        navigate('/home');
      }
      setSearchQuery(''); // Clear search input after navigation
    }
  };

  return (
    <div className="font-sans text-sm">
      {/* Main navbar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - centered on mobile, left-aligned on desktop */}
            {isMobile ? (
              <div className="flex mx-auto">
                <Link to="/" className="flex items-center">
                  <h1 className="text-2xl font-bold">H&M</h1>
                </Link>
              </div>
            ) : (
              <div className="flex items-center">
                <button id="menu-button" onClick={openDrawer} className="p-2 mr-2">
                  <Menu size={24} />
                </button>
                <Link to="/" className="flex items-center">
                  <h1 className="text-2xl font-bold">H&M</h1>
                </Link>
              </div>
            )}

            {/* Desktop Navigation */}
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

            {/* Right Icons */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                onClick={toggleSearch}
                className="p-1 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <Search size={20} />
              </button>
              <Link
                to="/signin"
                className="p-1 hidden md:flex hover:bg-gray-100 rounded-full w-8 h-8 items-center justify-center"
              >
                <User size={20} />
              </Link>
              <Link
                to="#"
                className="p-1 hidden md:flex hover:bg-gray-100 rounded-full w-8 h-8 items-center justify-center"
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
              {/* Mobile menu button moved to the right side with other icons */}
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
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-b border-gray-200 py-3 px-4 absolute w-full bg-white z-30">
          <div className="container mx-auto flex items-center max-w-2xl">
            <Search size={18} className="text-gray-500" />
            <form onSubmit={handleSearchSubmit} className="w-full flex items-center">
              <input
                type="text"
                placeholder="Search products"
                className="ml-2 w-full outline-none"
                autoFocus
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="ml-2">
                <X size={18} className="text-gray-500" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="bg-white fixed inset-0 z-50 overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
              <h1 className="text-xl font-bold">H&M</h1>
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

      {/* Category Drawer Component */}
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
