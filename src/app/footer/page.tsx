import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-6">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm font-semibold">
                            <span className="text-xl">Elegant.</span> | Gift & Decoration
                        </p>
                    </div>

                    <nav className="mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="/product">Product</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>

                
                <div className="border-t border-gray-600 my-4"></div>

            
                <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-center sm:text-left">
                        <p>&copy; 2023 Elegant. All rights reserved.</p>
                        <p><Link href="/privacy-policy">Privacy Policy</Link></p>
                        <p><Link href="/terms">Terms of Use</Link></p>
                    </div>
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
