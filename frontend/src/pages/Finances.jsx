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

  const [emails, setEmails] = useState([]);

  const [information, setInformation] = useState([]);

  const [info, setInfo] = useState([]);

  /**
   * Function to that gets the emails of everyone in a list
   */
  useEffect(() => { //Gets the user type
    const fetchData = async () => { //defines a function to fetch the use type
      try {
        const emailResponse = await axios.get('/getMemberEmails'); 
        const emails = emailResponse.data; //gets the list of all the emails

        const informationPromises = emails.map(async (email) => { //uses a mapping function to create a list in which each element is a sublist containing the user email and their respective finances 
          const infoResponse = await axios.get('/getFinances', { params: { email } }); //sends a request to find the finance information corresponding to the email
          return [email].concat(infoResponse.data);
        });

        // Wait for all requests to finish
       setInformation(await Promise.all(informationPromises)); //this calls the informationPromises function

      } catch (error) { //If we there is an error acessing the server, it logs it to the server
        console.error("Error fetching user role:", error);
      }
    };
    fetchData(); //calls the featch data function
  }, []); //The empty list tells react to only run this once
  
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
         <p>Here's a list of all the members of the Club:</p>
          <ul>
          {information.map((tuple, index) => (
            <li key={index}>
              <p></p>
              <p>Email: {tuple[0]}</p>
              <p>Data: {tuple.slice(1).join(', ')}</p>
            </li>
          ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Finances;
