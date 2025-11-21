import bannerImg from "..//..//..//assets/location-merchant.png"
import bgImg from "..//..//..//assets/be-a-merchant-bg.png"

const HeroBanner = () => {
  return (
    <div className="max-w-7xl h-auto mx-auto px-4 py-14">
      <div className="bg-[#0f2d33] rounded-3xl p-8 md:p-14 relative overflow-hidden">

        {/* Background Light Effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <img
            src={bgImg}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* Content Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Text Section */}
          <div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-5">
              Merchant and Customer Satisfaction 
              is Our First Priority
            </h1>

            <p className="text-gray-300  mb-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. ZapShift courier delivers your
              parcels anywhere in Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#c5ef56] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                Become a Merchant
              </button>

              <button className="border border-[#c5ef56] text-[#c5ef56] px-6 py-3 rounded-full font-medium hover:bg-[#c5ef56] hover:text-black transition">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center md:justify-end relative">
            <img
              src={bannerImg}
              alt="Boxes"
              className="w-72 md:w-96 opacity-90"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroBanner;
