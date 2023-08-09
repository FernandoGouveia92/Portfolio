import styled from 'styled-components'

export const BiografyInfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    margin-bottom: 50px;
    gap: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 8px;
    width: 80%;
    margin-bottom: 10px;
    text-align: justify;
`;

export const TextTitle = styled.h1`
    font-weight: bolder;
    color: white;
    text-align: center;
`;

export const Text = styled.p`
    color: white;
    font-weight: 200;
    font-size: 16px;
`;

export const StyledLinkTrybe = styled.a`
    text-decoration: none;
    font-weight: bold;
`;