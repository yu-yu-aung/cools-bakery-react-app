import React from 'react'

const VoucherSection = () => {
  return (
    <div className="col-span-2 flex flex-col h-full">
      <div className="p-3">
        <h2 className="text-gray-900 dark:text-gray-50">Order Summary</h2>
      </div>
      {/* Order Detail Card */}
      <div className="order-note font-mono text-sm p-3 border-b border-blue-200 dark:border-gray-700">
        <div className="flex justify-between px-2">
          <p className="text-gray-800 dark:text-gray-200">
            Buttery French Morning Croissant
          </p>
          <div className="flex gap-2">
            <div className="size-4 border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="minus" className="lucide lucide-minus size-2 text-gray-800"><path d="M5 12h14" /></svg>
            </div>
            <span className="item-count text-sm text-gray-800 dark:text-gray-200">1</span>
            <div className="size-4 border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus size-2 text-gray-800 p-0"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div className="flex gap-2 text-start">
            <p className="text-gray-600 dark:text-gray-300">1</p>
            <p className="text-gray-600 dark:text-gray-300">x</p>
            <p className="text-gray-600 dark:text-gray-300">1000</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">1000</p>
        </div>
      </div>
      {/* Order Detail Card */}
      <div className="order-note font-mono text-sm p-3 border-b border-blue-200 dark:border-gray-700">
        <div className="flex justify-between px-2">
          <p className="text-gray-800 dark:text-gray-200">
            Buttery French Morning Croissant
          </p>
          <div className="flex gap-2">
            <div className="size-4 border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="minus" className="lucide lucide-minus size-2 text-gray-800"><path d="M5 12h14" /></svg>
            </div>
            <span className="item-count text-sm text-gray-800 dark:text-gray-200">1</span>
            <div className="size-4 border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus size-2 text-gray-800 p-0"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div className="flex gap-2 text-start">
            <p className="text-gray-600 dark:text-gray-300">1</p>
            <p className="text-gray-600 dark:text-gray-300">x</p>
            <p className="text-gray-600 dark:text-gray-300">1000</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">1000</p>
        </div>
      </div>
      {/* Summary Table */}
      <div id="summary" className="p-3 flex justify-end">
        <table>
          <tbody className="font-mono text-sm text-gray-900 dark:text-gray-100">
            <tr className="text-end">
              <td>Total :</td>
              <td>10500</td>
            </tr>
            <tr className="text-end">
              <td>Text(5%) :</td>
              <td>1050</td>
            </tr>
            <tr className="text-end">
              <td>Net Total :</td>
              <td>11550</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Check Out Section */}
      <div className="mt-auto p-3">
        <div className="flex items-center justify-end mb-4">
          <div className="flex items-center me-4">
            <input id="inline-radio" type="radio" defaultValue name="inline-radio-group" className="size-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:ring-0" />
            <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dine In</label>
          </div>
          <div className="flex items-center me-4">
            <input id="inline-2-radio" type="radio" defaultValue name="inline-radio-group" className="size-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:ring-0" />
            <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Take Away</label>
          </div>
        </div>
        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm py-2 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700">
          Check Out
        </button>
      </div>
    </div>

  )
}

export default VoucherSection