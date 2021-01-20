import React, { useState } from "react";
import { StyledFooter } from "../components/styles/StyledComps";
import { useFormspark } from "@formspark/use-formspark";
import ScrollTop from "../util/ScrollTop";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [submit, submitting] = useFormspark({
    formId: "H2zZdzry",
  });
  return (
    <AnimateSharedLayout>
      <StyledFooter className="footer" id="contact" layout>
        <h2>Let's get in touch</h2>
        <h4>
          Send me an email below and I'll get back to you as soon as possible
        </h4>
        <AnimatePresence>
          {success && (
            <motion.h3
              layout
              classname="emailsent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Email Sent
            </motion.h3>
          )}
        </AnimatePresence>
        <form
          layout="true"
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
    </AnimateSharedLayout>
  );
};
export default Footer;
