import React from 'react'
import ProductHeader from './ProductHeader'
import ProductCardList from './ProductCardList'

const ProductContainer = () => {
  return (
    <>
    <div className='flex justify-between py-2 px-3'>
      <ProductHeader/>
    </div>
    <div className='overflow-scroll h-[900px]'>
      <ProductCardList/>
    </div>
    </>
  )
}

export default ProductContainer