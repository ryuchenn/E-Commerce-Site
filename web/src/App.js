
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import React from 'react';
import { adminRoutes, mainRoutes } from './routes/core_rt';
import { storeRoutes } from './routes/store_rt';

/**
 * Frontend Main 
 */
function App() {

  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <Router>
        {/* <nav>
          <ul>
            <a><Link to="/store">Store</Link></a>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/superuser">SuperUser</Link></li>
          </ul>
        </nav> */}
        <Routes>
          {mainRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
          {adminRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
          {storeRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
          <Route path="*" element={<Navigate to="/error404" replace />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
