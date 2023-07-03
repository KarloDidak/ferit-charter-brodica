import React, {useState} from "react";
import "../styles/login-register.css";

const Login = (props) => {    

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2 className="form-header" >Prijava</h2>
            <form className="login-form" onSubmit={handleSubmit} >
                <label htmlFor="email"> Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Vaš email" id="email" name="email"/>
                <label htmlFor="password"> Šifra </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
                <button type="submit"> Prijava </button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')} > Nemate račun ? Registrirajte se </button>
        </div>
    )
}

export default Login;