import { useState } from "react";
import "./App.css";

const initialUserData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "none",
  consent: false,
};

export default function App() {
  //TODO: Add your state fields here
  const [userData, setUserData] = useState(initialUserData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted: ", { userData });
    setUserData(initialUserData);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "name") {
      setUserData({ ...userData, name: inputValue });
    }
    if (inputName === "address") {
      setUserData({ ...userData, address: inputValue });
    }
    if (inputName === "phone") {
      setUserData({ ...userData, phone: inputValue });
    }
    if (inputName === "email") {
      setUserData({ ...userData, email: inputValue });
    }
    if (inputName === "complaint") {
      setUserData({ ...userData, complaint: inputValue });
    }
    if (inputName === "contact") {
      setUserData({ ...userData, contact: inputValue });
    }
    if (inputName === "consent") {
      setUserData({ ...userData, consent: event.target.checked });
    }
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
              onChange={handleChange}
              value={userData.name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={userData.address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={userData.phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
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
              onChange={handleChange}
              value={userData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleChange}
                checked={userData.contact === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleChange}
                checked={userData.contact === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleChange}
                checked={userData.contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleChange}
                checked={userData.contact === "none"}
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
              onChange={handleChange}
              checked={userData.consent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
