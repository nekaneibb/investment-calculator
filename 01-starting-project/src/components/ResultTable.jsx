import { calculateInvestmentResults } from "../util/investment.js";

export default function ResultTable({ input }) {
  const results = calculateInvestmentResults(input);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  console.log("RESULT TABLE", results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
            const totalAmountInvested = data.valueEndOfYear - totalInterest
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.valueEndOfYear}</td>
              <td>{data.interest}</td>
              <td>{totalInterest}</td>
              <td>{totalAmountInvested}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
