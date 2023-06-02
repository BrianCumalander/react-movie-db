import styled, { keyframes } from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    // first destructure the backdrop that is passed in. 
    // sort of a: 'background backdrop function, does backdrop exist ? 'here's where the backdrop should be, if so, use it.' : otherwise, use #000 to make it black.
    background: ${({ backdrop }) =>
        backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;


export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

@media screen and (max-width: 768px) {
    display: block;
    max-height: none;
}
`;


export const Text = styled.div`
    width: 100%;
    padding: 20px 40px; //set padding around entire text block
    color: var(--white);
    overflow: hidden; 

    .rating-director {
        display: flex; */
        justify-content: flex-start;
    }

    .score {
        /* these next 3 lines center the items */
        display: flex;
        align-items: center;
        justify-content: center;
        /* here, we will make a circle, first set the size, then background and color, then font weight, then circle & margin */
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        /* can be 25px or 50%, does the same thing, makes the circle */
        border-radius: 25px;
        margin: 0;
    }

    .director {
        /* set margin to 0, then 40px left */
        margin: 0 0 0 40px;

        p{
            margin: 0%;
        }
    }

    h1 {
        @media screen and (maxWidth: 768px) {
            font-size: var(--fontBig);
        }
    }
`;
