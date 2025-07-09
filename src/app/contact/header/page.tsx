import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white">
        
        <div className="text-xl font-bold text-black">3legant.</div>

        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">Shop</a>
          <a href="#" className="text-gray-600 hover:text-black">Product</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
        </nav>

        
        <div className="flex space-x-4 text-gray-600">
          <FaSearch className="w-5 h-5 cursor-pointer hover:text-black" />
          <FaUser className="w-5 h-5 cursor-pointer hover:text-black" />
          <div className="relative">
            <FaShoppingBag className="w-5 h-5 cursor-pointer hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
        </div>
      </header>


      <div className="px-6 py-2 text-gray-500 text-sm bg-white">
        <a href="#" className="hover:text-black">Home</a>
        <span className="mx-2">{'>'}</span>
        <a href="#" className="hover:text-black">Contact Us</a>
      </div>
    </>
  );
}
