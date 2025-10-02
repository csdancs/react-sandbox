import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import "./Login.css";


function Login() {
    const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "");
    const [password, setPassword] = useState(() => localStorage.getItem("password") || "");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const matchUsername = "love";
    const matchPassword = "of my life";

    useEffect(() => {
        localStorage.setItem("userName", userName);
    }, [userName]);

    useEffect(() => {
        localStorage.setItem("password", password);
    }, [password]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userName === matchUsername && password === matchPassword) {
            setUserName("");
            alert("Login successful");
            console.log("Login successful");
            setUserName("");
            setPassword("");
            localStorage.removeItem("userName");
            localStorage.removeItem("password");
            navigate("/image");
        } else {
            setError("Invalid username or password");
            console.log("Invalid username or password");
        }
    };

    return (
        <div className="login-container">
            <h2 style={{color: "black"}}>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="login-input"
                required
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
                />
                <button type="submit" className="login-button">Login</button>
                {error && <div className="login-error">{error}</div>}
            </form>
        </div>
    )
}

export default Login;
