import styled from 'styled-components';

export const Wrapper = styled.div`
   max-width: var()(--maxWidth);
   margin: 0 auto; //centers div
    padding: 0 20px; //sides

    h1 {
        color: var(--darkGrey);
    }

    @media screen and (max-width: 768px) {
        font-size: var(--fontBig);
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //auto-fill for responsive page, minmax(200 is smallest that thumbnail will be. 1fr fills up any avalible space.
    gap: 2rem;
`;
