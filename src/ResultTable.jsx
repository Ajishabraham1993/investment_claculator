import {formatter} from './util/investment'

export default function ResultTable({ TableData }) {
  let InitialInvestment = TableData[0].valueEndOfYear - TableData[0].annualInvestment-TableData[0].interest;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
      {TableData.map((tbl, ky) => {        
        let totalInterest = tbl.valueEndOfYear - tbl.annualInvestment*tbl.year-InitialInvestment;
        let totalAmountInvest = tbl.valueEndOfYear - totalInterest;
        return (<tr key={ky}>
        <td>{tbl.year}</td>
        <td>{formatter.format(tbl.valueEndOfYear)}</td>
        <td>{formatter.format(tbl.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvest)}</td>
        </tr>);
})}
      </tbody>
    </table>
  );
}
