// import React from 'react'
// import nav from "./Navbar.module.css"


// function Navbar() {
//   return (
//     <div className={nav.container}>
//         <div className={nav.text}>10% discount for registered users & free shipping for orders over $70 plus free returns</div>
//         <div className={nav.item}>
//         <div className={nav.link}>
//            <p>Home</p>
//            <p>Product</p>
//            <p>About</p>
//          </div>
//         <img src={"/assets/Dunker-logo-dark.png"} className={nav.logo}/>
//         </div>
//     </div>
//   )
// }

// export default Navbar
// Navbar.jsx və ya Navbar.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import nav from './Navbar.module.css'

function Navbar() {
  const pathname = usePathname()

  return (
    <div className={nav.container}>
      <div className={nav.text}>
        10% discount for registered users & free shipping for orders over $70 plus free returns
      </div>

      <div className={nav.item}>
        <div className={nav.link}>
          <Link
            href="/"
            className={pathname === '/' ? nav.active : ''}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={pathname === '/products' ? nav.active : ''}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={pathname === '/about' ? nav.active : ''}
          >
            About
          </Link>
        </div>

        <img src="/assets/Dunker-logo-dark.png" className={nav.logo} />
      </div>
    </div>
  )
}

export default Navbar
