import Image from 'next/image';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">3legant.</h3>
          <p className="text-sm mb-4">
            More than just a game. <br />
            It&apos;s a lifestyle.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Page</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Shop</a></li>
            <li><a href="#" className="hover:text-gray-300">Product</a></li>
            <li><a href="#" className="hover:text-gray-300">Articles</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Info</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Return & Refund</a></li>
            <li><a href="#" className="hover:text-gray-300">Support</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Office</h4>
          <p className="text-sm mb-2">4311 Hai Trieu street,</p>
          <p className="text-sm mb-2">District 1, HCMC</p>
          <p className="text-sm mb-2">Vietnam</p>
          <p className="text-sm">84-756-3237</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between items-center flex-col md:flex-row">
        <p className="text-sm">
          Copyright © 2023 3legant. All rights reserved |{' '}
          <a href="#" className="hover:text-gray-300">Privacy Policy</a> |{' '}
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Image src="/images/visa.png" alt="Visa" width={40} height={20} />
          <Image src="/images/mastercard.png" alt="Mastercard" width={40} height={20} />
          <Image src="/images/amex.png" alt="American Express" width={40} height={20} />
          <Image src="/images/stripe.png" alt="Stripe" width={40} height={20} />
          <Image src="/images/paypal.png" alt="PayPal" width={40} height={20} />
          <Image src="/images/applepay.png" alt="Apple Pay" width={40} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;