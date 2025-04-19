import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="w-full h-screen">
        <img
          src="../assets/home/home-banner.jpg" // replace with actual path
          alt="Banner"
          className="w-full h-full object-fit object-center"
        />
      </section>
      <section className="w-full">
        <div className="flex flex-col md:flex-row w-full">
          {/* First Image */}
          <figure className="w-full md:w-1/2">
            <img
              src="../assets/home/banner2-left.jpg" // Replace with actual image
              alt="Gallery Image 1"
              className="w-full h-[760.4px] object-fit"
            />
          </figure>

          {/* Second Image */}
          <figure className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src="../assets/home/banner2-right.jpg" // Replace with actual image
              alt="Gallery Image 2"
              className="w-full h-[760.4px] object-fit"
            />
          </figure>
        </div>
      </section>

      {/* Product Grid (Sample only) */}
      <div className="px-4 md:px-12 pb-16">
        <h2 className="text-2xl font-semibold mb-6 capitalize">New In</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <img
                src={`../assets/home/product-${i}.jpg`}
                alt="Product"
                className="w-full h-64 object-cover rounded-lg mb-2"
              />
              <h3 className="text-sm font-medium">Floral Midi Dress</h3>
              <p className="text-gray-500 text-sm">₹2,299</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid (Sample only) */}
      <div className="px-4 md:px-12 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[4, 3, 2, 1].map((i) => (
            <div key={i} className="text-center">
              <img
                src={`../assets/home/product-${i}.jpg`}
                alt="Product"
                className="w-full h-64 object-cover rounded-lg mb-2"
              />
              <h3 className="text-sm font-medium">Floral Midi Dress</h3>
              <p className="text-gray-500 text-sm">₹2,299</p>
            </div>
          ))}
        </div>
      </div>



      <section className="w-full flex justify-center px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40 my-16">
        <div className="flex flex-wrap justify-center gap-6">

          {/* Left Image Block */}
          <div className="flex flex-col">
            <img
              src="../assets/home/top-img.jpg"
              alt="Center Left"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2">
              <a href="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Tops</a>
              <a href="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</a>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="flex flex-col">
            <img
              src="../assets/home/linen-img.jpg"
              alt="Center Right"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2">
              <a href="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Linen</a>
              <a href="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</a>
            </div>
          </div>

        </div>
      </section>


      <section className="w-full flex justify-center px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40 my-16">
        <div className="flex flex-wrap justify-center gap-6">

          {/* Left Image Block */}
          <div className="flex flex-col">
            <img
              src="../assets/home/bottom-left.jpg"
              alt="Center Left"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2 ">
              <a href="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Dresses</a>
              <a href="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</a>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="flex flex-col">
            <img
              src="../assets/home/bottom-right.jpg"
              alt="Center Right"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] lg:w-[460px] lg:h-[690px] object-cover"
            />
            <div className="mt-4 space-y-2">
              <a href="#tops" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Accessories</a>
              <a href="#explore" className="text-sm font-medium text-blue-600 hover:underline block capitalize">Explore</a>
            </div>
          </div>

        </div>
      </section>



    </div>
  )
}
