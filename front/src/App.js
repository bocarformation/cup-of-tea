// App.js

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './utils/Auth';
import Home from './Pages/Home'; // Composant de la page d'accueil protégée
import Tea from './Pages/Tea'; // Composant de la page Tea
import Teas from './Pages/Teas'; // Composant de la page Teas
import CartPage from './Pages/CartPage'; // Composant de la page CartPage
import Login from './Pages/Login'; // Composant de la page de connexion
import Register from './Pages/Register'; // Composant de la page d'inscription
import Cookies from 'js-cookie';
import MyOrders from './Pages/MyOrders';

function App() {



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/the/:id" element={<Tea />} />
      <Route path="/nos-thes/" element={<Teas />} />
      <Route path="/panier" element={<CartPage />}/>
      <Route path="/mes-commandes" element={<MyOrders />}/>
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
    </Routes>
  );
}

export default App;
