import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to SiteAI</h1>
      <p>Clinical Study Management Platform</p>
      <nav>
        <ul>
          <li><Link to="/admin">Admin Panel</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function Admin() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Admin Panel</h1>
      <p>Administrative functions for SiteAI</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Study management dashboard</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
