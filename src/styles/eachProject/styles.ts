import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 10px;
    width: 80%;
`;

export const TextContentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
`;

export const Title = styled.h2`
    font-weight: bolder;
    color: white;
`;

export const Authors = styled.p`
    font-weight: bold;
    color: white;
`;

export const Description = styled.p`
    font-weight: lighter;
    color: white;
`;

export const Stacks = styled.p`
    font-weight: bolder;
    color: white;

    span:not(:last-child)::after {
        content: " ";
    }
`;

export const DeployLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: white;

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
`;
