import React from 'react'
import Link from 'next/link';


function Navbar() {
  return (
    <div>
        <nav className="p-4 flex justify-between items-center">
            <div className="text-2xl font-bold"> 
                <Link href="">Elegant</Link>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar;