import { createGlobalStyle } from 'styled-components';

//     --white: #fff;
//     --lightGrey: #eee;
//     --medGrey: #353535; 
//     --darkGrey: #1c1c1c;

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #363536;
        --darkGrey: #1d1b1d;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', san-serif;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white); // var is from the :root colors defined above
        }

        h3: {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`;