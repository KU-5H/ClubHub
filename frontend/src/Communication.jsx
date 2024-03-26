import { useEffect, useState } from "react";

export default function Communication() {

  const [list, lists] = useState(['a','b','c','d'])

  //This is temporary code, just for testing purposes for the backend
  function info() {
    if(Array.isArray(list)) {
      let update = list.map( n => <li key={n}>{n} </li>)
      return update
    }
    return list
  }

  function handleClick() {
    fetch('api/test')
    .then(res => {
      console.log(res)
      return res.json()
    }).then(val => {
      lists(val)
    })
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <ul>{info()}</ul> 
      <button onClick={handleClick}>click me!</button>
    </div>
  );
  }