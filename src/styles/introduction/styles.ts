import styled from 'styled-components'

export const FirstSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const Title = styled.h1`
    font-weight: bold;
    color: #7F8C8D;

    @media (max-width: 476px) {
        font-size: 16px;

    }
`

export const MainCointainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto; 
    width: 50%;
    margin-top: 50px;
    margin-bottom: 10px;

    /* border: red 2px solid; */

    @media (max-width: 476px) {
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 10px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    width: 50%;

    @media (max-width: 476px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`

export const PictureTitleContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const TextContent = styled.p`
    font-weight: bolder;
    font-size: 18px;

    @media (max-width: 476px) {
        font-size: 12px;
    }
`;