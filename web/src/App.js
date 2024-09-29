
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import View404 from "./core/view/404"
import Register from "./core/view/register"
import Login from "./core/view/login"
import Logout from "./core/view/logout"
import Account from "./core/view/account"
import SuperUser from "./core/view/superuser"
import Store_Home from "./store/view/store_home"
/**
 * Frontend Main 
 */
function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/superuser">SuperUser</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* Core */}
        <Route path="/" element={<Store_Home />} />
        <Route path="/error404" element={<View404 />} />

        {/* Core - Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/superuser" element={<SuperUser />} />

      </Routes>
    </Router>
  );
}

export default App;
