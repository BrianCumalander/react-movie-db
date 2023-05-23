/*
Creating a spinning horizontal bar, example=   |
*/

import styled from 'styled-components';

export const Spinner = styled.div`
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%; //setting to 50% makes it a circle
    width: 50px;
    width: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    /* @keyframes spin {
        from {
            opacity: 0;
        } 
        to {
            opacity: 1;
        }
    } */

// a different way to do the spin/rotate is:
    @keyframes spin {
        0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
    }
`;