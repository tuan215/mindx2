import logo from './logo.svg';
import './App.css';
import Register from './Component/Register/Register';
import ShopAppLogo from './Component/ShopAppLogo/ShopAppLogo';


function App() {
  return (
    < div className="Main">
      <div className="ShopAppLogo">
        <ShopAppLogo/>
      </div>
      <div className="Register_item">
        <h3>Welcome to Shop App</h3>
        <Register type="text" placeholder="User Name"/>
        <Register type="email" placeholder="Email@mail.com"/>
        <Register type="password" placeholder="Pass word"/>
        <Register type="password" placeholder="Confirm password"/>
        <button className="Register_button" type="button">
          <strong>Register</strong>
        </button>
        <button className="Login_button" type="button">
          <strong>Login</strong>
        </button>
      </div>
    </div>
  );
}

export default App;
