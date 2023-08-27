import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="main">
        <div class="container1">
          <h2>Contact Us</h2>
          <form>
            <div class="input-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="input-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="input-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
