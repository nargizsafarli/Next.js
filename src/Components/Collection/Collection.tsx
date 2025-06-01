
import React from 'react'
import col from "./Collection.module.css"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Collection() {
  
  return (
    <div className={col.container}>
        <div className={col.conItem}>
        <div className={col.item}>
        <p>run division</p>
        <h2>Uv protective clothes</h2>
        <span>run division
           Uv protective clothes
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ellent, esque eget massa ac urna finibus fringilla nonpon mauris sit amet nisl in nunc pharetra.
        </span>
       <Link href={"/products"} ><button className={col.button}>Shop Now</button></Link> 
        </div>
        <div className={col.itemTwo}>
          <img src={"/assets/home-5-png-8.png"}  className={col.img}/>
        </div>
        </div>
        <div className={col.conItem}>
        <img src={"/assets/home-2-shop-img-1.jpg"} className={col.img}/>
        <img src={"/assets/shop-list-sidebar-23.jpg"} className={col.img}/>
        </div>
    </div>
  )
}

export default Collection