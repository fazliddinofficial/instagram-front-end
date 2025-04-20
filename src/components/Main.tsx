import React, { useState } from "react";
import "../css/main.css";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "./api";

function Main() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickname] = useState("");

  const [signUp, { error }] = useMutation(SIGN_UP);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signUp({
        variables: {
          createUserInput: {
            fullName,
            email,
            password,
            nickName,
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1 className="title">Instagram</h1>
            <p className="p">
              Sign up to see photos and videos from you friends.
            </p>
            <button className="btn">Log in with Facebook</button>
            <div className="or">
              <div className="line"></div>
              <p className="or-p">or</p>
              <div className="line"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="inp"
                  placeholder="Mobile Number or Email"
                  type="text"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="inp"
                  placeholder="Password"
                  type="text"
                />
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inp"
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  value={nickName}
                  onChange={(e) => setNickname(e.target.value)}
                  className="inp"
                  placeholder="Username"
                  type="text"
                />
              </div>
              <p className="warning-p">
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <a className="warning-a" href="#">
                  Learn More
                </a>
              </p>
              <p className="warning-p">
                By signing up, you agree to our{" "}
                <a className="warning-a" href="#">
                  Terms
                </a>{" "}
                ,{" "}
                <a className="warning-a" href="#">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="warning-a" href="#">
                  Cookies Policy
                </a>{" "}
                .
              </p>
              <button type="submit" className="btn">
                Sign up
              </button>
              {error && <p>Error: {error?.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
