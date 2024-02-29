import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  const [contact, setContact] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      address,
      phone,
      email,
      complaint,
      contact,
      consent,
    };
    console.log("Form submitted: ", { userData });
  };

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleAddressInput = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleComplaintInput = (event) => {
    setComplaint(event.target.value);
  };

  const handleContactInput = (event) => {
    setContact(event.target.value);
  };

  const handleConsentCheckbox = (event) => {
    setConsent(event.target.checked);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleNameInput}
              value={name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleAddressInput}
              value={address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handlePhoneInput}
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleEmailInput}
              value={email}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleComplaintInput}
              value={complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleContactInput}
                checked={contact === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleContactInput}
                checked={contact === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleContactInput}
                checked={contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleContactInput}
                checked={contact === "none"}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              onChange={handleConsentCheckbox}
              checked={consent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
