import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, 
        rgba(0,0,0,0) 41%, 
        rgba(0,0,0,0.65) 100%
    ),
    url(${({ image}) => image}), var(--darkGrey);
    background-size: 100%, cover; //stops it from tiling
    background-position: center;
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

`;

export const Text = styled.div`

`;
