import React, { useState } from "react";
import styled from "styled-components";
import { useFormspark } from "@formspark/use-formspark";
import ScrollTop from "../util/ScrollTop";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [submit, submitting] = useFormspark({
    formId: "H2zZdzry",
  });
  return (
    <StyledFooter className="footer" id="contact">
      <h2>Let's get in touch</h2>
      <h3 classname="emailsent">{success ? "Email Sent" : ""}</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await submit({ name, email, message });
            setSuccess(true);
          } catch {
            console.error("Error Sending message");
          }
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSuccess(false);
          }, 10000);
        }}
      >
        <div className="formwrap">
          <div className="inputwrap">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <br />
          </div>
          <div className="messagewrap">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
          </div>

          <button type="submit" disabled={submitting}>
            Send
          </button>
        </div>
      </form>
      <div className="scrollTop" onClick={ScrollTop}>
        ^
      </div>
      <p>
        &copy; 2020 Designed & Built by <span>Davit Darsavelidze</span>
      </p>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  padding: 5rem 15rem;
  background-color: #272c33;
  font-size: 3rem;
  h2 {
    /* color:#e44e4e */
    color: #fff;
    display: block;
    text-align: center;
    position: relative;
    padding: 0;
    margin: 0 auto;
    font-size: 4rem;
    margin-bottom: 5rem;
    ::after {
      content: "";
      display: block;
      position: absolute;
      top: 120%;
      left: 50%;
      background-color: #e44e4e;
      width: 20%;
      height: 0.4rem;
      transform: translateX(-50%);
    }
  }

  h3 {
    color: green;
    background-color: white;
  }
  label {
    color: #e9eff2;
    font-size: 1.9rem;
    letter-spacing: 0.2rem;
    margin-right: 2rem;
    font-weight: 500;
    display: inline-block;
    width: 6.5rem;
  }
  input[type="text"],
  textarea {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #e9eff2;
    padding: 0.5rem 1rem;
    width: 15rem;
    resize: none;
    border-radius: 0.3rem;
    border: 3px solid transparent;
    transition: all 0.3s ease-in-out;
    &:focus {
      border-color: #9ab4c2;
    }
  }
  textarea {
    width: 16rem;
    height: 5.9rem;
  }
  form {
    width: 60%;
    padding-top: 1%;
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    transform: scale(1.1);
  }
  .formwrap {
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    justify-self: center;
    justify-content: center;
  }
  .inputwrap {
    flex-basis: 40%;
  }
  .messagewrap {
    height: 100%;
    flex-basis: 40%;
    display: flex;
    margin-top: 0.5rem;
    margin-left: 2rem;
    label {
      margin-left: 2rem;
      width: 8rem;
    }
  }
  button {
    flex-basis: 50%;
    align-self: center;
    justify-self: center;
    margin: 5rem auto;
    font-size: 2rem;
    font-weight: 700;
    color: #e9eff2;
    background-color: transparent;
    border: none;
    outline: none;
    border: 2px solid #9ab4c2;
    padding: 0.5rem 2.5rem;
    cursor: pointer;
    box-shadow: 0.1px 0.1px 2px #000;
    transition: all 0.3s ease;
    overflow: hidden;
    font-smooth: antialiased;
    &:hover {
      color: #e44e4e;
      border-color: #e44e4e;
      box-shadow: 0.1px 0.1px 4px #000;
    }
    &:active {
      box-shadow: 0.1px 0.1px 1px #000;
      transform: translateY(0.2rem);
    }
  }
  .scrollTop {
    font-size: 5rem;
    width: 20%;
    margin: auto;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transform: translateY(-5rem) scale(1.2);
    color: #e44e4e;
  }
  p {
    text-align: center;
    font-size: 1.8rem;
    color: #eaeaea;
    span {
      color: #e44e4e;
      font-weight: 700;
    }
  }
`;
export default Footer;
