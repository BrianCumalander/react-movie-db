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
        display: flex;
        justify-content: flex-start;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: var(--white);
        font-weight: 800;
        border-radius: 25px;
        margin: 0;
    }

`;
