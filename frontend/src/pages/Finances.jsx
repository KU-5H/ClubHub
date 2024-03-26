import { Link, Route, Routes } from 'react-router-dom';
import IncomeStatement from './IncomeStatement';
import Payments from './Payments'
import UnpaidDebts from './UnpaidDebts'

export default function Finances() {
    return (
      <div className="finances"> 
        <ul className='finances-categories'>
          <Link to="income-statement"><li>Income Statement</li></Link>
          <Link to="unpaid-debts"><li>Unpaid Debts</li></Link>
          <Link to="payments"><li>Payments</li></Link>
        </ul>

        <Routes>
          <Route path='income-statement' element={<IncomeStatement/>} />
          <Route path='unpaid-debts' element={<UnpaidDebts/>} />
          <Route path='payments' element={<Payments/>} />
        </Routes>
      </div>
    );
  }
  