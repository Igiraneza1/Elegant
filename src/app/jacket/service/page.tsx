// components/ServicesGrid.tsx
import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";

const ServicesGrid = () => {
  const services = [
    {
      icon: FaShippingFast,
      title: "Free Shipping",
      description: "Order above $200"
    },
    {
      icon: LiaMoneyBillSolid,
      title: "Money-back",
      description: "30 days guarantee"
    },
    {
      icon: GrSecure,
      title: "Secure Payments",
      description: "Secured by Stripe"
    },
    {
      icon: IoCallOutline,
      title: "24/7 Support",
      description: "Phone and Email support"
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index}>
                {Icon && <Icon className="mx-auto text-3xl text-black mb-3" />}
                <h3 className="text-lg text-gray-900 mb-2 text-center">{service.title}</h3>
                <p className="text-base text-gray-500 text-center">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
