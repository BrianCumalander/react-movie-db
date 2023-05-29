import styled from 'styled-components';

// Component
// styling the thumbnail & its image
export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s; //a nice transition effect when hovering over
    object-fit: cover; //centers the image in to the thumbnail dimensions
    border-radius: 20px;
    animation: animateThumb 0.5s; //name the animation animateThumb. Saw that the thumbs take a small amount of time to load and actually flash which creates a 'white' apearance before they are loaded. BUT, this animation will make it appear white to full opacity which looks much nicer.

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
