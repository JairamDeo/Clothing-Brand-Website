import { useState, useEffect, useRef } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import blousesintrend from '../assets/CategoryDrawer/ladies-section/blouses-in-trend.jpg';
import loungewear from '../assets/CategoryDrawer/ladies-section/loungewear.jpg';
import trousers from '../assets/CategoryDrawer/ladies-section/trousers.jpg';
import linen from '../assets/CategoryDrawer/men-section/linen.jpg';
import jeans from '../assets/CategoryDrawer/men-section/jeans.jpg';
import sunglasses from '../assets/CategoryDrawer/men-section/sunglasses.jpg';
import summer from '../assets/CategoryDrawer/kids-section/summer.jpg';
import playfull from '../assets/CategoryDrawer/kids-section/playfull.jpg';
import ocassion from '../assets/CategoryDrawer/kids-section/ocassion.jpg';
import bedroom from '../assets/CategoryDrawer/home-section/bedroom.jpg';
import kitchen from '../assets/CategoryDrawer/home-section/kitchen.jpg';
import living from '../assets/CategoryDrawer/home-section/living-room.jpg';

export default function CategoryDrawer({ 
  activeCategoryDrawer, 
  setActiveCategoryDrawer, 
  navCategories, 
  windowWidth,
  isMobile
}) {
  const toggleCategoryDrawer = (category) => {
    setActiveCategoryDrawer(category);
  };
  
  // Create a ref to track initial mount
  const firstRender = useRef(true);
  // Create a ref to track previous mobile state
  const prevIsMobile = useRef(isMobile);

  // Handle layout shifts during screen resize
  useEffect(() => {
    // Skip effect on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    
    // If mobile state changed and drawer is open, close it to prevent animation issues
    if (prevIsMobile.current !== isMobile && activeCategoryDrawer) {
      setActiveCategoryDrawer(null);
    }
    
    // Update previous mobile state
    prevIsMobile.current = isMobile;
  }, [isMobile, activeCategoryDrawer, setActiveCategoryDrawer]);
  
  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const drawer = document.getElementById('category-drawer');
      const menuButton = document.getElementById('menu-button');
      
      if (drawer && !drawer.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        setActiveCategoryDrawer(null);
      }
    };
    
    if (activeCategoryDrawer) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeCategoryDrawer, setActiveCategoryDrawer]);
  
  // Category-specific menu content
  const getCategoryContent = (category) => {
    switch (category) {
      case 'Ladies':
        return (
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 p-6">
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">NEW IN</h2>
                <h2 className="text-xl font-bold mb-4">EDITS</h2>
              </div>
              
              <div className="space-y-4">
                <Link to="#" className="block">CLOTHING</Link>
                <Link to="#" className="block">SPORT</Link>
                <Link to="#" className="block">ACCESSORIES</Link>
                <Link to="#" className="block">SWIMWEAR & BEACHWEAR</Link>
                <Link to="#" className="block">SHOES</Link>
                <Link to="#" className="block mt-6">MEMBER PRICES</Link>
                <Link to="#" className="block text-red-600">SALE</Link>
                <Link to="#" className="block mt-6">SUSTAINABILITY</Link>
                <Link to="#" className="block">CUSTOMER SERVICE</Link>
                <Link to="#" className="block">NEWSLETTER</Link>
                <Link to="#" className="block">FIND A STORE</Link>
                {windowWidth < 768 && (
                  <>
                    <Link to="#" className="block">DOWNLOAD ANDROID</Link>
                    <Link to="#" className="block">DOWNLOAD IOS</Link>
                  </>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src={blousesintrend} 
                  alt="Blouses in trend" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">BLOUSES IN TREND</p>
              </div>
              
              <div>
                <img 
                  src={loungewear} 
                  alt="Loungewear" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">LOUNGEWEAR</p>
              </div>

              <div>
                <img 
                  src={trousers} 
                  alt="Loungewear" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">TROUSERS</p>
              </div>
            </div>
          </div>
        );
      
      case 'Men':
        return (
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 p-6">
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">NEW IN</h2>
                <h2 className="text-xl font-bold mb-4">EDITS</h2>
              </div>
              
              <div className="space-y-4">
                <Link to="#" className="block">CLOTHING</Link>
                <Link to="#" className="block">ACCESSORIES</Link>
                <Link to="#" className="block">SPORT</Link>
                <Link to="#" className="block mt-6">MEMBER PRICES</Link>
                <Link to="#" className="block text-red-600">SALE</Link>
                <Link to="#" className="block mt-6">SUSTAINABILITY</Link>
                <Link to="#" className="block">CUSTOMER SERVICE</Link>
                <Link to="#" className="block">NEWSLETTER</Link>
                <Link to="#" className="block">FIND A STORE</Link>
                {windowWidth < 768 && (
                  <>
                    <Link to="#" className="block">DOWNLOAD ANDROID</Link>
                    <Link to="#" className="block">DOWNLOAD IOS</Link>
                  </>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src={linen} 
                  alt="Linen destination" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">LINEN DESTINATION</p>
              </div>
              
              <div>
                <img 
                  src={sunglasses} 
                  alt="Sunglasses" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">SUNGLASSES</p>
              </div>

              <div>
                <img 
                  src={jeans}
                  alt="Sunglasses" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">JEANS</p>
              </div>
            </div>
          </div>
        );
        
      case 'Kids':
        return (
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 p-6">
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">NEW IN</h2>
                <h2 className="text-xl font-bold mb-4">EDITS</h2>
              </div>
              
              <div className="space-y-4">
                <Link to="#" className="block">BABY (0-4Y)</Link>
                <Link to="#" className="block">KIDS (4-14Y)</Link>
                <Link to="#" className="block">ACCESSORIES</Link>
                <Link to="#" className="block">SHOES</Link>
                <Link to="#" className="block mt-6">MEMBER PRICES</Link>
                <Link to="#" className="block text-red-600">SALE</Link>
                <Link to="#" className="block mt-6">SUSTAINABILITY</Link>
                <Link to="#" className="block">CUSTOMER SERVICE</Link>
                <Link to="#" className="block">NEWSLETTER</Link>
                <Link to="#" className="block">FIND A STORE</Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src={summer} 
                  alt="Summer essentials" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">SUMMER ESSENTIALS</p>
              </div>
              
              <div>
                <img 
                  src={playfull} 
                  alt="Playful sets" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">PLAYFUL SETS</p>
              </div>
              
              <div>
                <img 
                  src={ocassion}
                  alt="Playful sets" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">OCCASSION</p>
              </div>
            </div>
          </div>
        );
        
      case 'Home':
        return (
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 p-6">
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">NEW IN</h2>
                <h2 className="text-xl font-bold mb-4">EDITS</h2>
                <h2 className="text-xl font-bold mb-4">ESSENTIALS</h2>
              </div>
              
              <div className="space-y-4">
                <Link to="#" className="block">SHOP BY ROOM</Link>
                <Link to="#" className="block">VIEW ALL PRODUCTS</Link>
                <Link to="#" className="block">DECORATIONS</Link>
                <Link to="#" className="block">INTERIOR TEXTILES</Link>
                <Link to="#" className="block">BEDDING & BLANKETS</Link>
                <Link to="#" className="block">COOKING & DINING</Link>
                <Link to="#" className="block">BATH & SHOWER</Link>
                <Link to="#" className="block">STORAGE</Link>
                <Link to="#" className="block">KIDS & BABY</Link>
                <Link to="#" className="block">ROOM FRAGRANCE</Link>
                <Link to="#" className="block">SLEEP & LOUNGEWEAR</Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src={bedroom}
                  alt="Bedroom" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">BEDROOM</p>
              </div>
              
              <div>
                <img 
                  src={living}
                  alt="Living room" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">LIVING ROOM</p>
              </div>

              <div>
                <img 
                  src={kitchen} 
                  alt="Living room" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">KITCHEN</p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      {/* Always render drawer but control visibility with classes */}
      <div id="category-drawer" 
        className={`fixed inset-y-0 bg-white z-50 shadow-lg transition-transform duration-700 ease-in-out overflow-y-auto ${
          isMobile 
            ? 'right-0 w-full' 
            : 'left-0 w-full md:w-1/2'
        }`}
        style={{ 
          transform: activeCategoryDrawer 
            ? 'translateX(0)' 
            : (isMobile ? 'translateX(100%)' : 'translateX(-100%)'),
          visibility: activeCategoryDrawer ? 'visible' : 'hidden'
        }}
      >
        <div className="flex items-center p-4 border-b border-gray-200">
          <button onClick={() => setActiveCategoryDrawer(null)} className="mr-4">
            <X size={24} />
          </button>
          
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            {navCategories.map((item) => (
              <button
                key={item.name}
                onClick={() => toggleCategoryDrawer(item.name)}
                className={`font-medium whitespace-nowrap ${
                  activeCategoryDrawer === item.name 
                    ? 'text-black font-semibold' 
                    : 'text-gray-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Only render content when drawer is active for performance */}
        {activeCategoryDrawer && getCategoryContent(activeCategoryDrawer)}
      </div>
      
      {/* Overlay with opacity transition */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-700 ${
          activeCategoryDrawer ? 'opacity-50 z-40' : 'opacity-0 -z-10'
        }`}
        onClick={() => setActiveCategoryDrawer(null)}
      />
    </>
  );
}