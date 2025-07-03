// // components/ServicesGrid.tsx
// import React from 'react';
// import { IoCallOutline, MdOutlinePayments, MdOutlineSupportAgent, MdOutlineUndo } from "react-icons/md";

// const ServicesGrid = () => {
//   const services = [
//     {
//       icon: IoCallOutline,
//       title: "Free Shipping",
//       description: "Order above $200"
//     },
//     {
//       icon: MdOutlineUndo,
//       title: "Money-back",
//       description: "30 days guarantee"
//     },
//     {
//       icon: MdOutlinePayments,
//       title: "Secure Payments",
//       description: "Secured by Stripe"
//     },
//     {
//       icon: MdOutlineSupportAgent,
//       title: "24/7 Support",
//       description: "Phone and Email support"
//     }
//   ];

//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div key={index} className="text-center">
//                 {Icon && <Icon className="mx-auto text-3xl text-black mb-3" />}
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
//                 <p className="text-base text-gray-500">{service.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesGrid;
