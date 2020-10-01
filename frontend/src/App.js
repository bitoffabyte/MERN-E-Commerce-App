import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Navbar';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './bootstrap.min.css';
const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
