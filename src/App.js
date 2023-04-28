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
              <Route exact path="/business" element={
                <News setProgress={setProgress} key="business" pageSize={pageSize} category="business" />
              }
              />
              <Route exact path="/entertainment" element={
                <News setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />
              }
              />
              <Route exact path="/general" element={
                <News setProgress={setProgress} key="general" pageSize={pageSize} category="general" />
              }
              />
              <Route exact path="/health" element={
                <News setProgress={setProgress} key="health" pageSize={pageSize} category="health" />
              }
              />
              <Route exact path="/science" element={
                <News setProgress={setProgress} key="science" pageSize={pageSize} category="science" />
              }
              />
              <Route exact path="/sports" element={
                <News setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" />
              }
              />
              <Route exact path="/technology" element={
                <News setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" />
              }
              />
            </Routes>
          </Router>

        </div>
      </>
    )
  }



export default App