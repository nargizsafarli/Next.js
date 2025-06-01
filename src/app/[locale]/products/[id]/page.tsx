import ProductDetail from '@/Components/DetailProduct/ProductDetail';
import React from 'react'

const page=async({params}:{params:any})=> {
    const parametrs=await params
    console.log(parametrs,"parametsrss");
  return (
    <div>
        <ProductDetail id={parametrs.id}/>
    </div>
  )
}

export default page