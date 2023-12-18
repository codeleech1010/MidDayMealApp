
import React, { useState } from 'react'
import InputField from './InputField'

const BillCalc = () => {

    // calculations are here
    const InitialItems = ["Vegetables", "Egg", "Pulse", "Oil", "Spices", "Soya", "Fuel"]

    const [billData, setBillData] = useState(
        InitialItems.reduce((acc, item) => ({
            ...acc,
            [`${item}Quantity`] : '',
            [`${item}Rate`] : '',
            [`${item}Result`] : ''

        }), {})
    )


    const handleChange = (e) => {
        const {name, value} = e.target
        setBillData((billData) => ({
            ...billData,
            [name] : value
        }))
    }

    const BillCalculation = (quantity, rate) => {
        if(!quantity || !rate || isNaN(quantity) || isNaN(rate)){
            return ''
        }

        return (parseFloat(quantity) * parseFloat(rate)).toFixed(2)
    }
    
    const TotalBillCalculation = () => {
        const total = InitialItems.reduce((acc, item) => {
            const resultValue = BillCalculation(billData[`${item}Quantity`], billData[`${item}Rate`])
            return acc + parseFloat(resultValue)
        }, 0)
        
        return parseFloat(total)
    }
    
  return (
    <div>
        <h1 className="text-orange-500 text-2xl font-semibold text-center p-4 my-2">Mid Day Meal Calculation App</h1>

        {InitialItems.map((item) =>(
            <InputField
            key = {item}
            label = {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
            quantity = {billData[`${item}Quantity`]}
            rate = {billData[`${item}Rate`]}
            result = {BillCalculation(billData[`${item}Quantity`], billData[`${item}Rate`])}
            onChange = {handleChange}
            />
        ))}

        <h2 className="text-green-600 text-2xl font-semibold text-center p-4 my-2">Total: {TotalBillCalculation() || 0}</h2>
    </div>
  )
}




export default BillCalc

