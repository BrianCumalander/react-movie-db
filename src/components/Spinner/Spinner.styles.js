// creates a spinning loading animation
import styled from 'styled-components';

export const Spinner = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid var(--medGrey);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 

`;
