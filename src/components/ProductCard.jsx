import React from 'react'

const ProductCard = () => {
  return (
    <div className="product-card col-span-1 h-auto border border-gray-400 rounded-lg pb-2">
  <div className="w-full h-[50%] overflow-hidden rounded-t-lg border-b-2 border-blue-100">
    <img src="/images/1.png" alt="cake photo" className="w-full h-full object-cover product-image" />
  </div>
  <div className="p-2 flex flex-col items-start h-[140px]">
    <span className="border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 rounded-sm text-sm px-2 py-1 my-2 inline-block product-category">Bread</span>
    <p className="text-sm font-semibold line-clamp-2 text-gray-800 dark:text-gray-100 my-2 product-name">Buttery French Morning Croissant</p>
    <div className="mt-auto mb-1 flex gap-3 text-gray-600 dark:text-gray-300">
      <div className="size-4">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag-icon lucide-tag">
          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      </div>
      <p className="font-mono text-sm">
        <span className="product-price">5800</span> MMK
      </p>
    </div>
  </div>
</div>

  )
}

export default ProductCard