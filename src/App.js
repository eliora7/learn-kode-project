import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './ComponentsJs/Header.jsx';
import Intro from './ComponentsJs/Intro.jsx';
import NextPage from './ComponentsJs/NextPage.jsx';
import DragQuestion from './ComponentsJs/DragQuestion.jsx';
import LearnAboutNails from './ComponentsJs/LearnAboutNails.jsx';
import DrawPage from './ComponentsJs/DrawPage.jsx';

function App() {
    return (
        <div className="App">
          <Header/>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/NextPage" element={<NextPage />} />
                <Route path="/DragQuestion" element={<DragQuestion />} />
                <Route path="/LearnAboutNails" element={<LearnAboutNails />} />
                <Route path="/DrawPage" element={<DrawPage />} />
            </Routes> 
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
