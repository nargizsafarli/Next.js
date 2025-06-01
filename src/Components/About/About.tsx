import React from 'react'
import abo from "./About.module.css"

function About() {
  return (
    <div>
        <div>
        <img src={"/assets/About-us-title-img.jpg"}/>
        </div>
        <h2 className={abo.all}>ALL ABOUT DUNKER</h2>
        <div className={abo.card}>
            <div className={abo.cardItem}>
              <img src={"/assets/About-us-img-1.jpg"}/>
                <p>SHOE LACES</p>
                <p>DECEMBER 12,2025</p>
              <h2>Try These New Ideas On How To Spend Your Leisure Time Outside</h2>  
            </div>
             <div className={abo.cardItem}>
              <img src={"/assets/about-us-blog-img.jpg"}/>
              <div>
                <p>SHOE LACES</p>
                <p>DECEMBER 12,2025</p>
              </div>
              <h2>Try These New Ideas On How To Spend Your Leisure Time Outside</h2>  
            </div>
             <div className={abo.cardItem}>
              <img src={"/assets/About-us-img-02.jpg"}/>
              <div>
                <p>SHOE LACES</p>
                <p>DECEMBER 12,2025</p>
              </div>
              <h2>Try These New Ideas On How To Spend Your Leisure Time Outside</h2>  
            </div>

        </div>
    </div>
  )
}

export default About