import { useState } from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './global.css';
import Home from './pages/Home'
import Wraper from './Wraper';
function App() {
  return (
    <>
      <Wraper >
        <Layout />
      </Wraper>
    </>
  );
}

export default App;
