import styled from 'styled-components';

//background linear-gradient applies a linear gradient that makes it darker at the bottom of image so that the Text component will stand out, and you will be able to read it no matter what the image is.
export const Wrapper = styled.div`
    background: linear-gradient(    
        to bottom, 
        rgba(0,0,0,0) 41%, 
        rgba(0,0,0,0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
    background-size: 100%, cover; //stops it from tiling
    background-position: center;
    background-color: green;
    height: 600px; //helps to display the entire background image
    position: relative; //setting to relative because we're going to set the text to center
    animation: animateHeroImage 1s; //will fade from white to image in one second

    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;

export const Content = styled.div`
    padding: 20px; //fixes padding around the entire heroImage. Also resolved the white bar that was between heroImage & header.
    max-width: var(--maxWidth); //defined in config.js
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100; //just to place it on top of everything else
    max-width: 700px;
    position: absolute;
    bottom: 40px; //moved the text to the bottom of heroImage, 40px from bottom of heroImage
    margin-right: 20px;
    min-height: 100px;
    color: var(--white); //defined in config.js

    h1 {
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }

    //setting for the screen itself
    @media screen and (max-width: 720px) { 
        max-width: 100%;
    }

`;
