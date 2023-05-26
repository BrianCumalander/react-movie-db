import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey); //color defined in GlobalStyle.js, if you wanna change it
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center; //horizontal
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto; //centers the entire div
`;

export const LogoImg = styled.img`
    width: 200px;   //usual size

    @media screen and (max-width: 500px) { //if width is less than 500px, >>
        width: 150px; //change logo width to 150px
    }
`;

export const TMDBLogoImg = styled.img`
width: 100px;

@media screen and (max-width: 500px) {
    width: 80px;
}
`;

