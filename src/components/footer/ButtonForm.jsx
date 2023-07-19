import React from 'react';
import { useState } from 'react';

function ButtonForm() {
    const [name, setName] = useState("Dipesh");
    const [names, setNames] = useState([]);

    function addNames(e) {
        e.preventDefault();
        setNames([...names, { id: names.length, names }]);
        setName("");
      }
  return (
    <>
    <form onSubmit={addNames}>
    <input
    type="text"
    name={names}
    placeholder="Enter Your Email Address ......."
    onChange={(e)=>setNames(e.target.value)}
  />
  <button>
    <span className="txt">Submit Now</span>
  </button>
  </form>
  </>
  )
}

export default ButtonForm;
// <form onSubmit={addNames}>
// <input
//   type="text"
//   value={name}
//   placeholder="add names"
//   onChange={(e) => setName(e.target.value)}
// />
// <button>Submit</button>
// </form>