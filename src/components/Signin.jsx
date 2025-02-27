"use client"

import React, { useState } from "react"

export default function SignInForm() {
  const [name, setName] = useState("")
  const [Mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!email || !password) {
      setMessage("Please fill in all fields")
      return
    }

    // Here you would typically call your authentication API
    console.log("Signing in with:", email, password)

    // For demonstration purposes, we'll just show a success message
    setMessage("Sign in successful!")
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <div style={{ paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Sign In</h2>
       </div> 
       <div style={{ padding: '10px' }}>
        <form onSubmit={handleSubmit} style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ marginBottom: '16px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>Name</label>
        <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
        </div>
        <div style={{ marginBottom: '16px' }}>
       <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="Mobile" style={{ display: 'block', marginBottom: '8px' }}>Contact no</label>
        <input
        id="Mobile no"
        type="contact"
        value={Mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter your Mobile no"
        required
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
        </div>
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '8px' }}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </div>
      {message && <p style={{ color: message === "Sign in successful!" ? 'green' : 'red', marginBottom: '16px' }}>{message}</p>}
      <button type="submit" style={{ width: '100%', padding: '8px', borderRadius: '4px', backgroundColor: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}>
        Sign In
      </button>
     </form>
     </div>
      <div style={{ paddingTop: '16px', borderTop:'1px solid #e5e7eb', textAlign: 'center' }}>
      <p style={{fontSize:'0.875rem', color: '#4b5563' }}>Already have an account. 
      <button onClick={() => console.log("/login")} style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
        <a href="/login">Login</a>
      </button>
      </p>
      </div>
  </div>
 </div>
  )
}