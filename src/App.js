import {useState} from "react"
//import logo from './logo.svg';
//import './App.css';
import './style.css';


function App() {
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);
  
  const handleDisplayLogin = () => {
    setOpen((prev) => (prev ? false : true));
  };

  const handleDisplayRegister = () => {
    setRegister((prev) => (prev ? false : true));
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
            <button onClick={handleDisplayLogin} className="btnlogin-popup">Login</button>
        </nav>
      </header>

      <div className={`wrapper ${open && "active-popup"}`}>
        <span className="icon-close" onClick={() => {setOpen(false);}}>
            <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box login">
          <h2>login</h2>
          <form action="#">
              <div className="input-box">
                  <span className="icon"><ion-icon name="mail"></ion-icon></span>
                  <input type="email" required />
                  <label>Email</label>
              </div>
              <div className="input-box">
                  <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                  <input type="password" required />
                  <label>Password</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox" /> Remember me</label>
                  <a href="#">Forgot Password ?</a>
              </div>
              <button type="submit" className="btn">Login</button>
              <div className="login-register">
                  <p>Don't have an account? <a href="#" className="register-link" onClick={handleDisplayRegister}>Register</a></p>
              </div>
          </form>
        </div>

       
        <div className={`wrapper ${register && " .register-link"}`}>
        
            <h2>Registration</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="person"></ion-icon>
                    </span>
                    <input type="text" required />
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" /> I agree to the terms & conditions</label>
                </div>
                <button type="submit" class="btn">Register</button>
                <div className="login-register">
                    <p>Already Don't have an account ? <a href="#" className="login-link">Login</a></p>
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
//<div className="form-box register">
//  <div className="form-box register">
// <div className={`wrapper ${register && ".form-box.register"}`}>