import React from 'react';
// Components, before you use them, you have to import them.
import Header from './components/Header';
import Home from './components/Home';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <GlobalStyle />
        </div>
    );
}



export default App;
