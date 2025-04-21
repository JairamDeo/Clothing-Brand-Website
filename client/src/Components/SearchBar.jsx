import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ isSearchOpen, setIsSearchOpen, isMobile }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Reset search query when search is closed
  useEffect(() => {
    if (!isSearchOpen) {
      setSearchQuery('');
    }
  }, [isSearchOpen]);

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
      else if (searchQuery.toLowerCase() === 'login') {
        navigate('/signin');
      }
      // Clear search input after navigation
      setSearchQuery('');
      // Close search after submitting
      setIsSearchOpen(false);
    }
  };

  // Close search
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  if (!isSearchOpen) return null;

  return (
    <div className={`border-b border-gray-200 py-3 px-4 fixed w-full bg-white z-30 ${isMobile ? 'top-28' : 'top-20'}`}>
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
          <button type="button" onClick={closeSearch} className="ml-2">
            <X size={18} className="text-gray-500" />
          </button>
        </form>
      </div>
    </div>
  );
}