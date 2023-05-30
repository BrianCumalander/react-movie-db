import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; //centered Home | movie title
    width: 100%;
    height: 70px; //gave top padding but I bet it's just aligning vertically
    background: var(--medGrey); //bckgrnd color now drkGrey
    color: var(--white); //text is now white, but a href is a bad color, purple against drkGrey = nearly impossible to read

`;



export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

  span {
    font-size: var(--fontMed); //enlarged font to be readable, but no spaces near pipe|
    color: var(--white);//changed the a href link to white
    padding-right: 10px; //gave space at pipe | by pulling justified content toward the right

    @media screen and (max-width: 768px) {
        font-size: var(--fontSmall);
    }
  }
`;

