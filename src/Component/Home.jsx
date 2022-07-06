import React,{useState} from 'react'
import "./Home.css";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import validator from 'validator'


function Home() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState('')

  const validateEmail = () => {
    if (validator.isEmail(email)) {
        alert("Welcome" + "  " + firstname);
    } else {
      alert('Enter valid Email!')
    }
  }

  return (
    <>
      <div className="main-cont">
        <div className="first-cont">
          <h1>
            The best offer
            <br /> <span>for your business</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vel
            omnis molestiae, id blanditiis doloremque unde officia rerum
            cupiditate eveniet in voluptatibus corrupti totam? Quas. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="second-cont">
          <form>
            <div class="container">
              <div className="input-cont">
                <input
                  className="firstname"
                  type="text"
                  placeholder="First name"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input type="text" placeholder="Last name" required onChange={(e) => setLastName(e.target.value)} />
                <br />
              </div>
              <input type="text" placeholder="Email address" required onChange={(e) => setEmail(e.target.value)} />
              {emailError}
              <br />
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
              <br />
              <input type="checkbox" checked />
              <label>Subscribe to our newsletter</label>
              <br />
              <br />
              <button type="submit" class="signupbtn" onClick={validateEmail}>
                Sign Up
              </button>
              <p>or sign up with:</p>
              <div className="login-option">
                <FaFacebookF />
                <AiOutlineGoogle />
                <FaTwitter />
                <AiFillGithub />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
