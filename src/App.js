import {useState} from "react"
import { IonIcon } from '@ionic/react';
import { close, mail, person, lockClosed } from 'ionicons/icons';
import './style.css';

function App() {
  const [open, setOpen] = useState("");
  const [register, setRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [username, setUsername] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  
  const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("=> email : " + email );
      console.log("=> Password : " + password );
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    console.log("=> username : " + username );
    console.log("=> email : " + emailRegister );
    console.log("=> Password : " + passwordRegister );
  };

  const handleDisplayPopupOn = () => {
    setOpen("active-popup");
  };

  const handleDisplayPopupOff = () => {
    setOpen("");
  };

  const handleDisplayRegister = () => {
    setRegister("active");
  };

  const handleDisplayLogin = () => {
    setRegister("");
  };

  return (
    <div className="App">
      <header>
        <h2 class="logo">logo</h2>
        <nav class="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
            <button onClick={handleDisplayPopupOn} className="btnlogin-popup">Login</button>
        </nav>
      </header>

      <div className={`wrapper ${open} ${register}`}>

        <span className="icon-close" onClick={handleDisplayPopupOff}>
            <IonIcon icon={close}></IonIcon>
        </span>

        <div className="form-box login">
          <h2>login</h2>
          <form  onSubmit={handleSubmit}> 
              <div className="input-box">
                  <span className="icon"><IonIcon icon={mail}></IonIcon></span>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }} 
                    type="email" 
                    required />
                  <label>Email</label>
              </div>
              <div className="input-box">
                  <span class="icon"><IonIcon icon={lockClosed}></IonIcon></span>
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }} 
                    type="password" 
                    required />
                  <label>Password</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox" /> Remember me</label>
                  <a href="#">Forgot Password ?</a>
              </div>
              <button type="submit" className="btn">Login</button>
              <div className="login-register">
                <p>Don't have an account ? <a onClick={handleDisplayRegister}>Register</a></p>
              </div>
          </form>
        </div>

        <div className="form-box register">
            <h2>Registration</h2>
            <form  onSubmit={handleSubmitRegister}> 
                <div className="input-box">
                    <span className="icon">
                        <IonIcon icon={person}></IonIcon>
                    </span>
                    <input 
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                      type="text" required />
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <span className="icon"><IonIcon icon={mail}></IonIcon></span>
                    <input
                     onChange={(event) => {
                      setEmailRegister(event.target.value);
                      }}
                      type="email" required />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><IonIcon icon={lockClosed}></IonIcon></span>
                    <input 
                      onChange={(event) => {
                        setPasswordRegister(event.target.value);
                      }}
                      type="password" 
                      required />
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/> I agree to the terms & conditions</label>
                </div>
                <button type="submit" class="btn">Register</button>
                <div className="login-register">
                    <p>Already Don't have an account ? <a onClick={handleDisplayLogin}>Login</a></p>
                </div>
            </form>
        </div>
      </div>

    </div>
  );
}

export default App;

// ------------------------------------------------------------------------------------------------------
// Etape de création d'un formulaire
//  1 Création du formulaire en balise html
//  2 Soumission du formulaire onSudmit / handleSudmit  event.preventDefault() pour eviter tout rechargement de la page
//  3 Collecte des données du formulaire
// ------------------------------------------------------------------------------------------------------
// Règles important dans React
//  En Réact on n'accede jamais directement dans le DOM
//  On laisse React le faire à notre place
//  Donc les méthodes, sont à bannir :
//        document.getElementById(id)
//        Element like ou 
//      querySelector 
//  Et il faut utiliser le hook useRef
//  useRef ne provoque pas de rechargement de la page
// ------------------------------------------------------------------------------------------------------
// Méthode : ascendante / descendante
//
//
// addEventListener
// <div className="form-box register">
// <div className="form-box login">
// <div className={`wrapper ${register && ".form-box.register"}`}>
// <div className={`form-box ${register && "login"}`}>
//  <div className={`${register ? "form-box login" : "active form-box login"}`}>
//  <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
//<div className={`${register ? "active form-box register" : "form-box register"}`}>
// const handleDisplayPopupON = () => {
//    setOpen((prev) => (prev ? false : true));
//  };