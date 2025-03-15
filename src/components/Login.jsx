"use client"
import { useContext, useState } from "react";
import { datacontext } from "../context/UserContext";

function Login() {
  let {notuser} = useContext(datacontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Here you would typically handle the login logic
    console.log("Login attempt with:", { email, password });
    window.location.href = '/';
    // Reset form and error after submission
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'rgb(219, 218, 218)' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '16px' }}>
        <div style={{ paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Login</h2>
          <p style={{ color: '#4b5563' }}>Enter your credentials to access your account</p>
        </div>
        <div style={{ padding: '16px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
              />
            </div>
            {error && <p style={{ color: 'red', fontSize: '0.875rem' }}>{error}</p>}
            <button type="submit" onClick={notuser(true)} style={{ padding: '8px', borderRadius: '4px', backgroundColor: 'indigo', color: 'white', border: 'none', cursor: 'pointer' }}>
              Log In
            </button>
          </form>
        </div>
        <div style={{ paddingTop: '16px', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
            Don't have an account? 
            <button onClick={() => window.location.href = '/signup'} style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;