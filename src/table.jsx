import {calculateInvestmentResults, formatter} from './util/investment'

export default function Table({iValue}) {

    const ans = calculateInvestmentResults(iValue)
    const initInvestment = ans[0].valueEndOfYear - ans[0].interest - ans[0].annualInvestment
    return(
        <table id="result"> 
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest Year</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          
          <tbody>
            {ans.map((data) => {

                const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initInvestment
                const totalAmountInvested = data.valueEndOfYear - totalInterest
                return (
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear) }</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
                )
                
            })}

            
          </tbody>
          
        </table>
    )
}