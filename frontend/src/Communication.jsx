import { useEffect, useState } from "react";

export default function Communication() {

  const [list, lists] = useState(['a','b','c','d'])

  function info() {
    let update = list.map( n => <li key={n}>{n} </li>)
    return update
  }

  function handleClick() {
    fetch('/test')
    .then(res => {
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
      <button onClick={handleClick()}>click me!</button>
    </div>
  );
  }