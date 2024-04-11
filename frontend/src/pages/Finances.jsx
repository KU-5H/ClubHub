import { Link, Route, Routes } from 'react-router-dom';
import IncomeStatement from './IncomeStatement';
import Payments from './Payments'
import UnpaidDebts from './UnpaidDebts'
import axios from "axios";
import { userContext } from '../../context/userContext'
import { useState, useContext, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';

function Finances() {

  const { user } = useContext(userContext) //assigns the user and the role
  
  const [loading, setLoading] = useState(true); //used to track whether the data is being fetched or not. True is the initial value of loading and the setLoading will be the function to change that

  const [information, setInformation] = useState([]);

  const [userInfo, setUserInfo] = useState();

  const [paymentAmount, setPaymentAmount] = useState('');

  /**
   * Delay which is a naive fix to the cookie problem, however it doesn't work well
   * REMOVE ASSUMING COOKIES WORK NORMALLY
   */

  

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

    const findUserFinanceEntry = async () => {
      try {
        const information = await axios.post('/getUserFinance', {
          mail: user.email,
        }); //gets the finance information for the user
        setUserInfo(information.data); //sets the state variable to the information that was fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    findUserFinanceEntry();

  }, []);

  const fetchData = async () => {
    try {
      // Fetch finances information for all emails
      const infoResponse = await axios.get('/getAllFinanceUsers'); //gets a list of all user objects found in the finance part of the database
      const allFinances = infoResponse.data; // Assigns the list with all the emails that are in both the finance and user database
      
      setInformation(allFinances); //sets the state variable to the list of finance user information

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 /**
  * Function used to process the submit button for the TREASURER version of the page
  */
  const handleTreasurerSubmit = async (event) => {
    event.preventDefault();
    try {
      let amount = parseInt(paymentAmount); //payment amount is the amount the the treasurer typed in
      await axios.post('/addFundsToAll', {amount}); //sends a request to update the funds
      setPaymentAmount(''); //clears the input field
      fetchData(); //fetches the data again
    } catch (error) {
      console.error('Error updating payment:', error);
    }
  };

  const showMemberPayments = (payment) => {
    console.log(payment)
  }

//----------------------------------------------------------------------------------------
  /**
   * Functions relating the the MEMBER
   */
//----------------------------------------------------------------------------------------


  /**
   * This Function is used to Process the Submit Button for the MEMBER Section of the page
   */

  const findUserFinanceEntry = async () => {
    try {
      const information = await axios.post('/getUserFinance', {
        mail: user.email,
      }); //gets the finance information for the user
      console.log(information.data);
      setUserInfo(information.data); //sets the state variable to the information that was fetched
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleMemberSubmit = async (e) => {
    e.preventDefault();
    try {
      const update = await axios.post('/userPayment', { mail: user.email, amount: paymentAmount }); //sends a request to update the userDebt entry using the email of the user and the amount they entered
      console.log(update.data)
      if(update.data.error) {
        toast.error(update.data.error); //if there is an error, it will display the error message
      } else {
        setPaymentAmount('');  //resets the payment amount to null after the user has submitted
        toast.success('Payment Successful!'); //displays a success message
        findUserFinanceEntry()
      }
    } catch (error) { //if there is an error using the database
      console.error('Error updating payment:', error);
    }
  };

  const showPayments = () => {
    if (userInfo) {
      return userInfo.paymentsMade.map((payment) => (
        <p key={uuidv4()}>
          Amount: {payment}
        </p>
      ));
    }
  }


  // While loading, display a loading indicator
  return (
    <div className="finances">
      {user.role === 'Member' ? (
        <>
          <div className="finances">
            <center>
              <p>Welcome {user.name}</p>
                <div>
                  <h1>Unpaid Debt</h1>
                  <div></div>
                  <h2>{userInfo && userInfo.unpaidDebt}</h2>
                  <h1>Payments Made</h1>
                  <h2>{showPayments()}</h2>
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
      ) : (
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
                  <div>Payments Made: {finance.paymentsMade.map((item, index) => (
                    <span key={index}>{item} </span>
                  ))}</div>
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
