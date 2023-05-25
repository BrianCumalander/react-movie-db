import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex; //centers div on all sides   
    align-items: center; //no change
    height: 100%; //no change
    background: var(--darkGrey); 
    padding: 0 20px; //no change
`;

export const Content = styled.div`
   //setting to relative b/c we want to set the icon to absolute position
    position: relative;
    max-width: var(--maxWidth);
    width: 100%; //left justified
    height: 55px; //squashed the image and text box
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        font-size: 28px;
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }

        @media screen and (max-width: 720px){
            font-size: 28px;
        }
    }
`;
