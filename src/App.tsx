import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import AddMember from './Components/AddMember';
import ProtectedRoute from './Components/service/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />


        <Route path='/' element={<ProtectedRoute/>}>
          <Route index element={<Dashboard />} />
          <Route path='/addmember' element={<AddMember />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
