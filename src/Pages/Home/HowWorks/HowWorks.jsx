import React from "react";
import { FaPeopleCarry } from "react-icons/fa";


const HowWorks = () => {
  const items = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon:  <FaPeopleCarry size={40} />,
    },
    {
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaPeopleCarry size={40} />,
    },
    {
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaPeopleCarry size={40} />,
    },
    {
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaPeopleCarry size={40} />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-8">How it Works</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition"
          >
            <div className="text-center mb-3 text-gray-600">{item.icon}</div>

            <h3 className="font-semibold text mb-2">{item.title}</h3>

            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
