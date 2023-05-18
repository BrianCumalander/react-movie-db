import React from 'react';
// Components, before you use them, you have to import them.
import Header from './components/Header';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <div className='App'>
            <Header />
            Start here.
            <GlobalStyle />
        </div>
    );
}



export default App;
