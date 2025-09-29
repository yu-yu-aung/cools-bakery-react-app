import React from 'react'

const ProductHeader = () => {
  return (
    <>
      <h2 className="text-gray-900 dark:text-gray-50 text-lg">
        Product List <span className="product-count">(17)</span>
      </h2>
      <form className="max-w-md" id="search-form">
        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="search" className="lucide lucide-search size-4 text-gray-800 dark:text-gray-400"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
          </div>
          <input type="search" id="search" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        </div>
      </form>
    </>

  )
}

export default ProductHeader