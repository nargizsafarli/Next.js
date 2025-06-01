import React from 'react'
import foot from './Footer.module.css'

function Footer() {
  return (
    <footer className={foot.footer}>
      <div className={foot.container}>
        <div className={foot.column}>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={foot.column}>
          <h3>Support</h3>
          <ul>
            <li>Contact</li>
            <li>Help Center</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className={foot.column}>
          <h3>Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className={foot.bottomText}>
        © 2025 safarli. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
