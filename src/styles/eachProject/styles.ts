import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 10px;
    width: 80%;

    /* border: red solid 2px; */

    @media (max-width: 476px) {
        flex-direction: column;
        width: 100%;
        padding-bottom: 10px;
    }
`;

export const TextContentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;

    @media (max-width: 476px) {
        flex-direction: column;
        width: 100%;
        padding: 8px;
    }
`;

export const Title = styled.h2`
    font-weight: bolder;
    color: white;
    font-size: 18px;
`;

export const Authors = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: white;
`;

export const Description = styled.p`
    font-weight: lighter;
    font-size: 16px;
    color: white;
`;

export const Stacks = styled.p`
    font-weight: bolder;
    color: white;
    font-size: 16px;

    span:not(:last-child)::after {
        content: "  ";
        margin-left: 1.5px;

    }
`;

export const DeployLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: white;
    font-size: 16px;

    &:hover {
        color: yellow;
    }
`;

export const AppImage = styled.img`
    width: 35%;
    height: 100%;
    border-radius: 8px;
    border: solid 5px white;
    filter: drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.5));

    @media (max-width: 476px) {
        /* flex-direction: column; */
        width: 80%;
        padding-bottom: 10px;
    }
`;
