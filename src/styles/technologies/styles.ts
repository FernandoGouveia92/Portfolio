import styled from 'styled-components';

export const FatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 900px;
  margin: 0 auto; */
`;

export const SubCointainer = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  width: 150px;
  height: 150px;
  border-radius: 8%;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px #888888;
  }
`;

export const TechIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  width: auto;
`;

export const TechName = styled.p`
  text-align: center;
  font-weight: normal;
`;

export const TitleTech = styled.h1`
  font-weight: bolder;
`
