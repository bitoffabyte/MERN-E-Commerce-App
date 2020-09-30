import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Navbar';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';

import './bootstrap.min.css';
const App = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <HomeScreen />
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default App;
