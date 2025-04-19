import React from 'react';
import {Link} from 'react-router-dom';

// Import static images (for fixed paths)
import kidsBanner from '../assets/kids/kids-banner.jpg';
import bannerLeft from '../assets/kids/banner2-left.jpg';
import bannerRight from '../assets/kids/banner2-right.jpg';
import topImg from '../assets/kids/top-img.jpg';
import linenImg from '../assets/kids/linen-img.jpg';
import bottomLeft from '../assets/kids/bottom-left.jpg';
import bottomRight from '../assets/kids/bottom-right.jpg';

// Import all product images dynamically
const productImages = import.meta.glob('../assets/kids/product-*.jpg', {
  eager: true,
  import: 'default',
});

export default function Kids() {
  return (
    <div>
      {/* Banner Section */}
      <section className="w-full h-screen">
        <img
          src={kidsBanner}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Gallery Section */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row w-full">
          <figure className="w-full md:w-1/2">
            <img
              src={bannerLeft}
              alt="Gallery Image 1"
              className="w-full h-[760.4px] object-fit"
            />
          </figure>
          <figure className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={bannerRight}
              alt="Gallery Image 2"
              className="w-full h-[760.4px] object-fit"
            />
          </figure>
        </div>
      </section>

      {/* Products Section - Top Image Block */}
      <section className="w-full flex justify-center px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40 my-16">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Left Image Block */}
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

          {/* Right Image Block */}
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

      {/* Products Section - Bottom Image Block */}
      <section className="w-full flex justify-center px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40 my-16">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Left Image Block */}
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

          {/* Right Image Block */}
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
