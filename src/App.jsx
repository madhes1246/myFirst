import React, { Component } from 'react';

import Parent from './Parent';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <Routes>
                    <Route index element={<NavBar />} />

                    <Route path="/" element={<Home />} />
                    <Route path="/parent" element={<Parent />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />

                   
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;