import { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const text =
    "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.";

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">About Us</h2>
      <p className="text-gray-600 max-w-2xl mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b pb-3">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`text-lg font-medium transition ${
              activeTab === t ? "text-green-400" : "text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutUs;
