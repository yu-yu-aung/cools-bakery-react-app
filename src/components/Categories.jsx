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
    <div >
    {
      categories.map((el) => 
        <CategoryBtn/>
      )
    }
      
    </div>
  )
}

export default Categories