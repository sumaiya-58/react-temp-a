import React from "react";
import { FaHome,FaAddressBook  } from "react-icons/fa";
export default function App15() {
  return (
    <div>
      <h3>This is App15</h3>
      <div>
        <FaHome size={15} />
        <label>Home</label>
      </div>
      <div>
        <FaAddressBook size={15}/>
        <label>Contact</label>
      </div>
    </div>
  );
}