import React from 'react'
import CategoryBtn from './CategoryBtn'

const Categories = () => {

  const categories = [
  { id: 0, title: "All" },
  { id: 1, title: "Bread" },
  { id: 2, title: "Cake" },
  { id: 3, title: "Coffee" },
  { id: 4, title: "Smoothie" },
  ];

  return (
    <div className='flex flex-col gap-5 items-end pr-3 pl-5'>
    {
      categories.map((el) => 
        <CategoryBtn category={el} key={el.id}/>
      )
    }
      
    </div>
  )
}

export default Categories