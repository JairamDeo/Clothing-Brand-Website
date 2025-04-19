import React from 'react';
import {Link} from 'react-router-dom';

// Import static images (for fixed paths)
import bannerTop from '../assets/men/men-banner.jpg';
import bannerLeft from '../assets/men/banner2-left.jpg';
import bannerRight from '../assets/men/banner2-right.jpg';
import topImg from '../assets/men/top-img.jpg';
import linenImg from '../assets/men/linen-img.jpg';
import bottomLeft from '../assets/men/bottom-left.jpg';
import bottomRight from '../assets/men/bottom-right.jpg';

// Import all product images dynamically
const productImages = import.meta.glob('../assets/men/product-*.jpg', {
  eager: true,
  import: 'default',
});

export default function Men() {
  return (
    <div>
      <section className="w-full h-screen">
        <img
          src={bannerTop}
          alt="Banner"
          className="w-full h-full object-fit object-center"
        />
      </section>

      <section className="w-full">
        <div className="flex flex-col md:flex-row w-full">
          <figure className="w-full md:w-1/2">
            <img
              src={bannerLeft}
              alt="Gallery Image 1"
              className="w-full h-[760.4px] object-cover"
            />
          </figure>
          <figure className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={bannerRight}
              alt="Gallery Image 2"
              className="w-full h-[760.4px] object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Product Grid (First Section) */}
      <div className="px-4 md:px-12 pb-16">
        <h2 className="text-2xl font-semibold mb-6 capitalize">New In</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <img
                src={productImages[`../assets/men/product-${i}.jpg`]}
                alt={`Product ${i}`}
                className="w-full h-64 object-cover rounded-lg mb-2"
              />
              <h3 className="text-sm font-medium">Floral Midi Dress</h3>
              <p className="text-gray-500 text-sm">₹2,299</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid (Second Section) */}
      <div className="px-4 md:px-12 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[4, 3, 2, 1].map((i) => (
            <div key={i} className="text-center">
              <img
                src={productImages[`../assets/men/product-${i}.jpg`]}
                alt={`Product ${i}`}
                className="w-full h-64 object-cover rounded-lg mb-2"
              />
              <h3 className="text-sm font-medium">Floral Midi Dress</h3>
              <p className="text-gray-500 text-sm">₹2,299</p>
            </div>
          ))}
        </div>
      </div>

      {/* First Section (Center Left & Right Images) */}
      <section className="w-full flex justify-center px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40 my-16">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col">
            <img
              src={topImg}
              alt="Center Left"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2">
              <Link to="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Tops</Link>
              <Link to="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src={linenImg}
              alt="Center Right"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2">
              <Link to="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Linen</Link>
              <Link to="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section (Bottom Left & Right Images) */}
      <section className="w-full flex justify-center px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40 my-16">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col">
            <img
              src={bottomLeft}
              alt="Center Left"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2">
              <Link to="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Dresses</Link>
              <Link to="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src={bottomRight}
              alt="Center Right"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2">
              <Link to="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Accessories</Link>
              <Link to="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
