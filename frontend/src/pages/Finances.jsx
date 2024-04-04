import { Link, Route, Routes } from 'react-router-dom';
import IncomeStatement from './IncomeStatement';
import Payments from './Payments'
import UnpaidDebts from './UnpaidDebts'
import axios from "axios";
import {UserContext} from '../../context/userContext'
import { useState, useContext, useEffect, useRef} from "react";



function Finances(){

  const {user} = useContext(UserContext) //assigns the user and the role

  const [loading, setLoading] = useState(true); //used to track whether the data is being fetched or not. True is the initial value of loading and the setLoading will be the function to change that

  //creates a delay so that it has time to fetch the cookie
  const delay = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 100)); 
      setLoading(false);
    } catch (error) {
      console.error("delay:", error);
    }
  };
  delay();

  // While loading, display a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="finances">
      {user.role === 'Member' && (
        <>
          <ul className='finances-categories'>
            <li><Link to="/income-statement">Income Statement</Link></li>
            <li><Link to="/unpaid-debts">Unpaid Debts</Link></li>
            <li><Link to="/payments">Payments</Link></li>
          </ul>
  
          <Routes>
            <Route path='/income-statement' element={<IncomeStatement />} />
            <Route path='/unpaid-debts' element={<UnpaidDebts />} />
            <Route path='/payments' element={<Payments />} />
          </Routes>
        </>
      )}

      {user.role === 'Treasurer' && (
        <>
        <p>Here's a list of all the member of the Club</p>
        </>
      )}
    </div>
  );
}

export default Finances;
