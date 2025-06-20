"use client"
import React from "react";
import Image from "next/image";
import airpods1 from "../../image/eletronics/airpods1.jpg";
import airpods2 from "../../image/eletronics/airpods2.jpg";
import airpods3 from "../../image/eletronics/airpods3.jpg";
import camera1 from "../../image/eletronics/camera1.jpg";
import camera2 from "../../image/eletronics/camera2.jpg";
import camera3 from "../../image/eletronics/camera3.jpg";
import camera4 from "../../image/eletronics/camera4.jpg";
import earphone1 from "../../image/eletronics/earphone1.jpg";
import earphone2 from "../../image/eletronics/earphone2.jpg";
import headphone1 from "../../image/eletronics/head-phone.jpg";
import headphone2 from "../../image/eletronics/headphone.jpg";
import laptop1 from "../../image/eletronics/laptop1.jpg";
import laptop2 from "../../image/eletronics/laptop2.jpg";
import laptop3 from "../../image/eletronics/laptop3.jpg";
import laptop4 from "../../image/eletronics/laptop4.jpg";
import laptop5 from "../../image/eletronics/laptop5.jpg";
import laptop6 from "../../image/eletronics/laptop6.jpg";
import laptop7 from "../../image/eletronics/laptop7.jpg";
import mobile from "../../image/eletronics/mobile.jpg";
import set1 from "../../image/eletronics/set1.jpg";
import set2 from "../../image/eletronics/set2.jpg";
import set3 from "../../image/eletronics/set3.jpg";
import smartphone1 from "../../image/eletronics/smartphone1.jpg";
import smartphone2 from "../../image/eletronics/smartphone2.jpg";
import smartphone3 from "../../image/eletronics/smartphone3.jpg";
import stand1 from "../../image/eletronics/stand1.jpg";
import stand2 from "../../image/eletronics/stand2.jpg";
import stand3 from "../../image/eletronics/stand3.jpg";
import stand4 from "../../image/eletronics/stand4.jpg";
import stand5 from "../../image/eletronics/stand5.jpg";
import tablet1 from "../../image/eletronics/tablet1.jpg";
import tablet2 from "../../image/eletronics/tablet2.jpg";
import tablet3 from "../../image/eletronics/tablet3.jpg";
import tablet4 from "../../image/eletronics/tablet4.jpg";
import tablet5 from "../../image/eletronics/tablet5.jpg";
import watch1 from "../../image/eletronics/watch1.jpg";
import watch2 from "../../image/eletronics/watch2.jpg";
import watch3 from "../../image/eletronics/watch3.jpg";

export default function ElectronicHome() {

const MapCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const maps = [
    {id: 1, image: airpods1, title: "Airpods Pro", price: "$19",},
    {id: 2, image: airpods2, title: "Airpods Max",price: "$29",},
    {id: 3, image: airpods3, title: "Airpods 2", price: "$9",},
    {id: 4, image: camera1, title: "Security camera", price: "$50",},
    {id: 5, image: camera2, title: "Indoor camera", price: "$49",},
    {id: 6, image: camera3, title: "Outdoor camera", price: "$79",},
    {id: 7, image: camera4, title: "Smart camera", price: "$109",},
    {id: 8, image:earphone1, title: "Earphone", price: "$4",},
    {id: 9, image: earphone2, title: "Earphone", price: "$3",},
    {id: 10, image: headphone1, title: "Headphone", price: "$20",},
    {id: 11, image: headphone2, title: "Headphone", price: "$19",},
    {id: 12, image: laptop1, title: "HP", price: "$500",},
    {id: 13, image: laptop2, title: "MacBook", price: "$900",},
    {id: 14, image: laptop3, title: "Lenovo", price: "$600",},
    {id: 15, image: laptop4, title: "MacBook", price: "$1000",},
    {id: 16, image: laptop5, title: "MackBook Desktop", price: "$700",},
    {id: 17, image: laptop6, title: "MacBook", price: "$800",},
    {id: 18, image: laptop7, title: "MacBook", price: "$1200",},
    {id: 19, image: mobile, title: "Mobile", price: "$150",},
    {id: 20, image: set1, title: "HP & Tablet & Phone", price: "$1800",},
    {id: 21, image: set2, title: "MacBook & Tablet & Smart watch & Airpods", price: "$2000",},
    {id: 22, image: set3, title: "HP & Headphone", price: "$900",},
    {id: 23, image: smartphone1, title: "Infinix", price: "$300",},
    {id: 24, image: smartphone2, title: "iPhone", price: "$800",},
    {id: 25, image: smartphone3, title: "Samsung", price: "$500",},
    {id: 26, image: stand1, title: "Stand pro", price: "$30",},
    {id: 27, image: stand2, title: "Horizontal stand", price: "$40",},
    {id: 28, image: stand3, title: "Stand max", price: "$50",},
    {id: 29, image: stand4, title: "Multiple stand", price: "$60",},
    {id: 30, image: stand5, title: "Simple stand", price: "$17",},
    {id: 31, image: tablet1, title: "Tablet", price: "$200",},
    {id: 32, image: tablet2, title: "Tablet Pro", price: "$300",},
    {id: 33, image: tablet3, title: "Tablet Max", price: "$400",},
    {id: 34, image: tablet4, title: "Tablet Air", price: "$500",},
    {id: 35, image: tablet5, title: "Tablet Air Max", price: "$600",},
    {id: 36, image: watch1, title: "Smart Watch", price: "$100",},
    {id: 37, image: watch2, title: "Smart Watch Pro", price: "$150",},
    {id: 38, image: watch3, title: "Smart Watch Max", price: "$200",},
  ]

    const nextSlide = () => {
    setCurrentSlide((prev: number) => (prev === maps.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev: number) => (prev === 0 ? maps.length - 1 : prev - 1));
  };

interface MapItem {
    id: number;
    image: any;
    title: string;
    price: string;
}

const goToSlide = (index: number): void => {
    setCurrentSlide(index);
};


    return(
            <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Interactive Map Explorer</h2>
      
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
        <div className="relative h-96">
          {maps.map((map, index) => (
            <div
              key={map.id}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <Image
                key={map.id}
                src={map.image}
                alt={map.title}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-xl font-semibold">{map.title}</h3>
                <p>{map.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
        >
          ❯
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {maps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Zoom In
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Zoom Out
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Reset View
        </button>
      </div>
    </div>
    )
}