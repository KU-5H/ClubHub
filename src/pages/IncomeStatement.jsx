import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function IncomeStatement() {
  const [incomeStatements, setIncomeStatements] = useState([
    {month: "Janurary", year: 2024, revenue: {membership: 8000, drinks: 400, equipment: 600}, expenses: {payments: 3000, rent: 1000}, pretaxIncome: 5000, taxes: 400, netIncome: 4000}, 
    {month: "Janurary", year: 2024, revenue: {membership: 8000, drinks: 400, equipment: 600}, expenses: {payments: 3000, rent: 1000}, pretaxIncome: 5000, taxes: 400, netIncome: 4000}, 
    {month: "Janurary", year: 2024, revenue: {membership: 8000, drinks: 400, equipment: 600}, expenses: {payments: 3000, rent: 1000}, pretaxIncome: 5000, taxes: 400, netIncome: 4000}
  ]);

  return (
    <div className="income-statements">
    {incomeStatements.map(incomeStatement => (
      <div key={uuidv4()}>
      <p className="income-statement-date">{incomeStatement.month} {incomeStatement.year} Income Statement</p>
      <div className="income-statement"> 
        <p className="income-statement-categories">Revenue</p>
        <div className="income-statement-list">
          {Object.entries(incomeStatement.revenue).map(([key, value]) => 
            <div className="income-statement-item" key={uuidv4()}>
              <p>{key}</p>
              <p className="cost">{value}</p>
            </div>
          )}
        </div>
        <p className="income-statement-categories">Expenses</p>
        <div className="income-statement-list">
          {Object.entries(incomeStatement.expenses).map(([key, value]) => 
            <div className="income-statement-item" key={uuidv4()}>
              <p>{key}</p>
              <p className="cost">{value}</p>
            </div>
          )}
        </div>
        <p className="income-statement-categories">Pretax Income &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {incomeStatement.pretaxIncome}</p>
        <p className="income-statement-categories">Net Income &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                              &nbsp; {incomeStatement.netIncome}</p>
      </div>
      </div>
    ))}
    </div>
  );
  }
  
