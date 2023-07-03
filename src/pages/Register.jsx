import React, {useState} from "react";
import "../styles/login-register.css"

const Register = (props) => {   
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container"> 
        <h2 className="form-header" >Registracija</h2>
        <form className="register-form" onSubmit={handleSubmit} >
            <label htmlFor="name" >Ime i prezime</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Vaše ime i prezime"></input>
            <label htmlFor="email"> Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Vaš email" id="email" name="email"/>
            <label htmlFor="password"> Šifra </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
            <button type="submit"> Registracija </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')} > Već imate račun ? Prijavite se </button>
        </div>
    );
}

export default Register;