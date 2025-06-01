import { Link } from '@/i18n/navigation'
import axios from 'axios'
import React from 'react'
import pro from './Product.module.css'
import Image from 'next/image'

const Product = async () => {
  const products = await axios.get('https://fakestoreapi.com/products')
  const data = products.data

  return (
    <div className={pro.container}>
      {data &&
        data.map((product: any) => (
          <div key={product.id} className={pro.card}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className={pro.image}
            />
            <h3 className={pro.title}>{product.title}</h3>
            <p className={pro.price}>${product.price}</p>
            <Link href={`products/${product.id}`} className={pro.button}>
              View Details
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Product
