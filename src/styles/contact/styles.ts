import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
`

export const Text = styled.p`
    font-weight: bolder;
    font-size: larger;
`

export const TextQuestion = styled.p`
    font-weight: bolder;
    font-size: xx-large;
    @media (max-width: 476px) {
        font-size: large;
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    margin-top: 1rem;

    @media (max-width: 476px) {
        justify-content: space-around;
    }
`;

export const IconLink = styled.a`

    &:hover {
        transform: scale(1.2);
        transition: transform 0.2s ease-in-out;
    }
`;