import { Link, Route, Routes } from 'react-router-dom';
import IncomeStatement from './IncomeStatement';
import Payments from './Payments'
import UnpaidDebts from './UnpaidDebts'
import axios from "axios";
import { UserContext } from '../../context/userContext'
import { useState, useContext, useEffect, useRef } from "react";

function Finances() {

  const { user } = useContext(UserContext) //assigns the user and the role
  
  
  const [loading, setLoading] = useState(true); //used to track whether the data is being fetched or not. True is the initial value of loading and the setLoading will be the function to change that

  const [information, setInformation] = useState([]);

  const [userInfo, setUserInfo] = useState();

  const [paymentAmount, setPaymentAmount] = useState('');

  /**
   * Delay which is a naive fix to the cookie problem, however it doesn't work well
   * REMOVE ASSUMING COOKIES WORK NORMALLY
   */
  const delay = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 150));
      setLoading(false);
    } catch (error) {
      console.error("delay:", error);
    }
  };
  delay();
  


//----------------------------------------------------------------------------------------
  /**
   * Functions relating the the TREASURER
   */
//----------------------------------------------------------------------------------------

  /**
   * Function used to get the list of all the users that
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch finances information for all emails
        const infoResponse = await axios.get('/getAllFinanceUsers'); //gets a list of all user objects found in the finance part of the databse
        const allFinances = infoResponse.data; // Assigns the list with all the emails that are in both the finance and user database
        
        setInformation(allFinances); //sets the state variable to the list of finance user information

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }; fetchData();
  }, []);

 /**
  * Function used to process the submit button for the TREASURER version of the page
  */
  const handleTreasurerSubmit = async (event) => {
    event.preventDefault();
    try {
      let amount = parseInt(paymentAmount); //payment amount is the amount the the treasurer typed in
      await axios.post('/addFundsToAll', {amount}); //sends a request to update the funds
      setPaymentAmount(''); //clears the input field
      window.location.reload(); //refreshed the page after a sucessful prompt
    } catch (error) {
      console.error('Error updating payment:', error);
    }
  };

//----------------------------------------------------------------------------------------
  /**
   * Functions relating the the MEMBER
   */
//----------------------------------------------------------------------------------------


  /**
   * This Function is used to grab the field entries corresponding to the user's email
   */
  useEffect(() => {
    const findUserFinanceEntry = async () => {
      try {
        const information = await axios.get('/getUserFinance',  { params: { mail: "WhateverEmail" } }); //This sends a request to get the finance records from the user | user.email does not work for me
        setUserInfo(information.data); //Updates the state variable to the user finance information
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    findUserFinanceEntry();
  }, []);


  /**
   * This Function is used to Process the Submit Button for the MEMBER Section of the page
   */
  const handleMemberSubmit = async (event) => {
    event.preventDefault();
    try {
      let amount = parseInt(paymentAmount); //changes the amount to an int
      await axios.post('/userPayment', { mail: email, amount: amount }); //sends a request to update the userDebt entry using the email of the user and the amount they entered
      setPaymentAmount('');  //resets the payment amount to null after the user has submitted
    } catch (error) { //if there is an error using the database
      console.error('Error updating payment:', error);
    }

  };


  // While loading, display a loading indicator
  return (
    <div className="finances">
      {user.role === 'Member' && (
        <>
          <div className="finances">
            <center>
          <p>Welcome {user.name}</p>
            <div>
              <h1>Unpaid Debt</h1>
              <div></div>
              <h2>{userInfo.unpaidDebt}</h2>
              <h1>Payments Made</h1>
              <h2>{userInfo.paymentsMade}</h2>
            </div>

            <form onSubmit={handleMemberSubmit}>
              <input
                type="text"
                className="announcement-option submit"
                placeholder="Add Payment"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
              />
              <div>
                <button type="submit" className="announcement-option submit">Update</button>
              </div>
            </form>



            </center>
          </div>
        </>
      )}

      {user.role === 'Treasurer' || user.role === 'Admin' && (
        <>
          <center>
            <p>Welcome {user.name}</p>
            <br></br>
            <p>Here's a list of all the members of the Club:</p>
            <br></br>
            <ul>
              {information.map((finance, index) => (
                <li key={index}>
                  <p>Email: {finance.email}</p>
                  <p>Unpaid Debt: {finance.unpaidDebt}</p>
                  <p>Payments Made: {finance.paymentsMade}</p>
                  <br></br>
                </li>
              ))}
            </ul>
            <form onSubmit={handleTreasurerSubmit}>
              <input
                type="text"
                className="announcement-option submit"
                placeholder="Add Payment"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
              />
              <div>
                <button type="submit" className="announcement-option submit">Update</button>
              </div>
            </form>
          </center>
        </>
      )}
    </div>
  );
}

export default Finances;
