import { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                <a href="#" className="block">CLOTHING</a>
                <a href="#" className="block">SPORT</a>
                <a href="#" className="block">ACCESSORIES</a>
                <a href="#" className="block">SWIMWEAR & BEACHWEAR</a>
                <a href="#" className="block">SHOES</a>
                <a href="#" className="block mt-6">MEMBER PRICES</a>
                <a href="#" className="block text-red-600">SALE</a>
                <a href="#" className="block mt-6">SUSTAINABILITY</a>
                <a href="#" className="block">CUSTOMER SERVICE</a>
                <a href="#" className="block">NEWSLETTER</a>
                <a href="#" className="block">FIND A STORE</a>
                {windowWidth < 768 && (
                  <>
                    <a href="#" className="block">DOWNLOAD ANDROID</a>
                    <a href="#" className="block">DOWNLOAD IOS</a>
                  </>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src="../assets/CategoryDrawer/ladies-section/blouses-in-trend.jpg" 
                  alt="Blouses in trend" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">BLOUSES IN TREND</p>
              </div>
              
              <div>
                <img 
                  src="../assets/CategoryDrawer/ladies-section/loungewear.jpg" 
                  alt="Loungewear" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">LOUNGEWEAR</p>
              </div>

              <div>
                <img 
                  src="../assets/CategoryDrawer/ladies-section/trousers.jpg" 
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
                <a href="#" className="block">CLOTHING</a>
                <a href="#" className="block">ACCESSORIES</a>
                <a href="#" className="block">SPORT</a>
                <a href="#" className="block mt-6">MEMBER PRICES</a>
                <a href="#" className="block text-red-600">SALE</a>
                <a href="#" className="block mt-6">SUSTAINABILITY</a>
                <a href="#" className="block">CUSTOMER SERVICE</a>
                <a href="#" className="block">NEWSLETTER</a>
                <a href="#" className="block">FIND A STORE</a>
                {windowWidth < 768 && (
                  <>
                    <a href="#" className="block">DOWNLOAD ANDROID</a>
                    <a href="#" className="block">DOWNLOAD IOS</a>
                  </>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src="../assets/CategoryDrawer/men-section/linen.jpg" 
                  alt="Linen destination" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">LINEN DESTINATION</p>
              </div>
              
              <div>
                <img 
                  src="../assets/CategoryDrawer/men-section/sunglasses.jpg" 
                  alt="Sunglasses" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">SUNGLASSES</p>
              </div>

              <div>
                <img 
                  src="../assets/CategoryDrawer/men-section/jeans.jpg" 
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
                <a href="#" className="block">BABY (0-4Y)</a>
                <a href="#" className="block">KIDS (4-14Y)</a>
                <a href="#" className="block">ACCESSORIES</a>
                <a href="#" className="block">SHOES</a>
                <a href="#" className="block mt-6">MEMBER PRICES</a>
                <a href="#" className="block text-red-600">SALE</a>
                <a href="#" className="block mt-6">SUSTAINABILITY</a>
                <a href="#" className="block">CUSTOMER SERVICE</a>
                <a href="#" className="block">NEWSLETTER</a>
                <a href="#" className="block">FIND A STORE</a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src="../assets/CategoryDrawer/kids-section/summer.jpg" 
                  alt="Summer essentials" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">SUMMER ESSENTIALS</p>
              </div>
              
              <div>
                <img 
                  src="../assets/CategoryDrawer/kids-section/playfull.jpg" 
                  alt="Playful sets" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">PLAYFUL SETS</p>
              </div>
              
              <div>
                <img 
                  src="../assets/CategoryDrawer/kids-section/ocassion.jpg" 
                  alt="Playful sets" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">OCCASSION</p>
              </div>
            </div>
          </div>
        );
        
      case 'H&M HOME':
        return (
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 p-6">
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">NEW IN</h2>
                <h2 className="text-xl font-bold mb-4">EDITS</h2>
                <h2 className="text-xl font-bold mb-4">ESSENTIALS</h2>
              </div>
              
              <div className="space-y-4">
                <a href="#" className="block">SHOP BY ROOM</a>
                <a href="#" className="block">VIEW ALL PRODUCTS</a>
                <a href="#" className="block">DECORATIONS</a>
                <a href="#" className="block">INTERIOR TEXTILES</a>
                <a href="#" className="block">BEDDING & BLANKETS</a>
                <a href="#" className="block">COOKING & DINING</a>
                <a href="#" className="block">BATH & SHOWER</a>
                <a href="#" className="block">STORAGE</a>
                <a href="#" className="block">KIDS & BABY</a>
                <a href="#" className="block">ROOM FRAGRANCE</a>
                <a href="#" className="block">SLEEP & LOUNGEWEAR</a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 space-y-8">
              <div>
                <img 
                  src="../assets/CategoryDrawer/home-section/bedroom.jpg" 
                  alt="Bedroom" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">BEDROOM</p>
              </div>
              
              <div>
                <img 
                  src="../assets/CategoryDrawer/home-section/living-room.jpg" 
                  alt="Living room" 
                  className="w-full h-48 object-fit mb-2" 
                />
                <p className="font-bold text-center">LIVING ROOM</p>
              </div>

              <div>
                <img 
                  src="../assets/CategoryDrawer/home-section/kitchen.jpg" 
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
      {activeCategoryDrawer && (
        <div id="category-drawer" 
          className={`fixed inset-y-0 bg-white z-50 shadow-lg transform transition-transform duration-700 ease-in-out overflow-y-auto ${
            isMobile 
              ? 'right-0 w-full' 
              : 'left-0 w-full md:w-1/2'
          }`}
          style={{ 
            transitionProperty: 'transform',
            transform: activeCategoryDrawer ? 'translateX(0)' : (isMobile ? 'translateX(100%)' : 'translateX(-100%)')
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
          
          {/* Drawer content based on active category */}
          {getCategoryContent(activeCategoryDrawer)}
        </div>
      )}
      
      {/* Overlay when drawer is open */}
      {activeCategoryDrawer && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-700"
          onClick={() => setActiveCategoryDrawer(null)}
          style={{ opacity: activeCategoryDrawer ? '1' : '0' }}
        />
      )}
    </>
  );
}