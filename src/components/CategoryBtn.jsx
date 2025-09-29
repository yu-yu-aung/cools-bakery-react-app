import React from 'react'

const CategoryBtn = ({category: {id, title}}) => {
  return (
    <button className='rounded-lg px-4 py-2 w-full text-end hover:bg-blue-100 hover:border-blue-300 active:bg-blue-100 active:border-blue-300 duration-200 bg-blue-100 border border-blue-300 text-blue-800'>{title}</button>
  )
}

export default CategoryBtn