import { Link, Route, Routes } from 'react-router-dom';
import IncomeStatement from './IncomeStatement';
import Payments from './Payments'
import UnpaidDebts from './UnpaidDebts'
import axios from "axios";
import {userContext} from '../../context/userContext'
import { useState, useContext, useEffect, useRef} from "react";



function Finances(){

  const {user} = useContext(userContext)

 // const [userRole, setUserRole] = useState(null); // State to store the user's role

//  useEffect(() => { //Gets the user type
  //  const fetchData = async () => { //defines a function to fetch the use type
    //  try {
      //  const response = await axios.get('/getMemberType'); //waits to get the data
      //  setUserRole(response.data.role); // Once we get the data, set the user's role
    //  } catch (error) { //If we there is an error acessing the server, it logs it to the server
     //   console.error("Error fetching user role:", error);
     // }
  //  };
  //  fetchData(); //calls the featch data function
 // }, []); //The empty list tells react to only run this once





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
        <p>This is a test to see if the treasurer works</p>
          <p>Make sure that this thing is like fortnite</p>
        </>
      )}
    </div>
  );
}

export default Finances;