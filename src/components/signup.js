import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signup = () => {
  const nameRef = useRef();
  const mobileRef = useRef();
  const dobRef = useRef();
  const emailRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const mobile = mobileRef.current.value;
    const dob = dobRef.current.value;
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (name && mobile && dob &&email && password )  registerUser( name, mobile,dob, email, password);
  };

  return (
    <div className="form">
      <h2> User Registration Page</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Mobile" type="mobile" ref={mobileRef} />
        <input placeholder="Date Of Birth" type="dob" ref={dobRef} />
        <input placeholder="Email" type="email" ref={emailRef} />  
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;