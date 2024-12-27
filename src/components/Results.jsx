import React from 'react'
import {calculateInvestmentResults,formatter} from "./../util/investment"

const Results = ({data}) => {
    const result=calculateInvestmentResults(data)
    const initialInvestment=result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment
    
  return (
    <table id="result">
        <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map((yearData)=>{
                const totalInterest=yearData.valueEndOfYear - yearData.annualInvestment*yearData.year-initialInvestment
                const totalAmountInvested=yearData.valueEndOfYear-totalInterest
               return <tr key={yearData.year}>
                    <th>{yearData.year}</th>
                    <th>{formatter.format(yearData.valueEndOfYear)}</th>
                    <th>{formatter.format(yearData.interest)}</th>
                    <th>{formatter.format(totalInterest)}</th>
                    <th>{formatter.format(totalAmountInvested)}</th>
                </tr>

            })}
        </tbody>

    </table>
  )
}

export default Results