import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function UnpaidDebts() {
  const [unpaidDebts, setUnpaidDebts] = useState([
    {date: "Janurary 24, 2024", title: "rent", amount: 1000},
    {date: "Janurary 24, 2024", title: "rent", amount: 1000},
    {date: "Janurary 24, 2024", title: "rent", amount: 1000},
    {date: "Janurary 24, 2024", title: "rent", amount: 1000},
  ]);

    return (
      <div className="income-statements">
        <div className="income-statement"> 
          <p className="income-statement-categories">Unpaid Debts</p>
          <div className="income-statement-list">
            {unpaidDebts.map(debt => 
              <div className="debt-item" key={uuidv4()}>
                <p>{debt.date}</p>
                <p>{debt.title}</p>
                <p>{debt.amount}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
