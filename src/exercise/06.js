// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import { red } from 'chalk';
import * as React from 'react'
import { useState, useRef } from 'react'

function UsernameForm({onSubmitUsername}) {
  const username = useRef();
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(username.current.value);
  };

  const handleChange= (e) => {
    const val = e.target.value;
    const formattedName = val.toLowerCase();
    const isValid  = val === formattedName;
    setError(isValid ? null : 'Username must be in lowercase');
    setName(formattedName);
  }
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" value={name} ref={username} onChange={handleChange}/>
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername}/>
}

export default App
