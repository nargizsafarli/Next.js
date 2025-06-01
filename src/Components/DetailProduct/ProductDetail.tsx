import axios from 'axios'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import det from './Detail.module.css'
import Image from 'next/image'
import Link from 'next/link'


const ProductDetail = async ({ id }: { id: string }) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
  const product = res.data


  return (
    <>
      <Navbar />
      <div className={det.wrapper}>
        <div className={det.imageBox}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className={det.image}
          />
        </div>
        <div className={det.content}>
          <h1 className={det.title}>{product.title}</h1>
          <p className={det.description}>{product.description}</p>
          <p className={det.category}>Category: {product.category}</p>
          <p className={det.price}>Price: ${product.price}</p>
        
            <Link href="/products">
            <button className={det.button}>Go Back</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
