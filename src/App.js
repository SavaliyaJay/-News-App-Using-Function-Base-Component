import './App.css';

import React ,{useState} from 'react'
import Navbar from './Components/Navbar';
import News  from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  // const c = 'jay';
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
  
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
              height={3}
            />
            <Routes>
              <Route exact path="/" element={
                <News setProgress={setProgress} key="general" pageSize={pageSize} category="general" />
              }
              />