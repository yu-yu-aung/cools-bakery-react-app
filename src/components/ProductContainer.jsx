import React from 'react'
import ProductCard from './ProductCard'
import ProductHeader from './ProductHeader'

const ProductContainer = () => {
  return (
    <>
    <div className='flex justify-between py-2 px-3'>
      <ProductHeader/>
    </div>
    <div>
      <ProductCard/>
    </div>
    </>
  )
}

export default ProductContainer