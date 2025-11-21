import React from "react";
import livetack from "..//..//..//assets/live-tracking.png"
import safedelivary from "..//..//..//assets/safe-delivery.png"
const Delivery = () => {
  return (
    <div className="space-y-6 py-6 px-6">
      <div className="flex justify-center items-center gap-6">
        <div>
          <img src={livetack} alt="" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Live Parcel Tracking
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Stay updated in real-time with our live parcel tracking features.
            From pick-up to delivery, monitor your shipment’s journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
       <div className="flex justify-center items-center gap-6">
        <div>
          <img src={safedelivary} alt="" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            100% safe delivery
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Stay updated in real-time with our live parcel tracking features.
            From pick-up to delivery, monitor your shipment’s journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
       <div className="flex justify-center items-center gap-6">
        <div>
          <img src={safedelivary} alt="" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            24/7 call center supprot
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Stay updated in real-time with our live parcel tracking features.
            From pick-up to delivery, monitor your shipment’s journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
