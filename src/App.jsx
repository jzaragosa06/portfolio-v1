import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Works from './pages/Works';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/works' element={<Works />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </HashRouter>
    );
}

export default App;