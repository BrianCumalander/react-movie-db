import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    background: var(--darkGrey); /* background color */
    padding: 0 20px; /* gives it a nice padding all the way around */
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth); /* sets the max width, but below will display it */
    width: 100%; /* controls how wide the content spans */
    margin: 0 auto; /* sets the margin of the content */

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 20px;
        margin: 0 20px;
        flex: 1;

        :first-child {
            margin-left: 0;
        }

        :last-child {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 768px) {
        display: block;

        .column {
            margin: 20px 0;
        }
    }
`;
