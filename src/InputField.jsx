import React from 'react'

const InputField = ({label, quantity, rate, result, onChange}) => {

//InputField
  return (
    <div>
        <label className = 'text-orange-500 flex space-x-6'>{label}:</label>
        <input 
        className='bg-slate-200 text-blue-600 mt-1 place-content-start hover:bg-gradient-to-t from-green-500 via-white to-orange-500 border-l-pink-600 max-w-md p-2 rounded-lg'
        type='number'
        name={`${label}Quantity`}
        value={quantity}
        onChange={onChange}
        placeholder='Quantity'
        />

        <label>X</label>

        <input 
        className='bg-slate-200 text-blue-600 mt-1 hover:bg-gradient-to-t from-green-500 via-white to-orange-500 border-l-pink-600 max-w-md p-2 rounded-lg'
        type='number'
        name={`${label}Rate`}
        value={rate}
        onChange={onChange}
        placeholder='Rate'
        />

        <label className="ml-2 text-green-500">= Rs </label>

        <input 
        className='bg-slate-200 text-blue-600 mt-1 hover:bg-gradient-to-t from-green-500 via-white to-orange-500 border-l-pink-600 max-w-md p-2 rounded-lg'
        type='number'
        name={`${label}Result`}
        value={result}
        onChange={onChange}
        placeholder='Result'
        />

    </div>
  )
}

export default InputField




