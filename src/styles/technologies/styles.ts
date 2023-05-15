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
  margin: 0 auto;

  @media (max-width: 476px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
`;

export const SubCointainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  @media (max-width: 476px) {
    display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  } 

`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;
  width: 130px;
  height: 130px;
  border-radius: 8%;
  padding: 4px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px #888888;
  }

  @media (max-width: 476px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.1rem;
    width: 90px;
    height: 90px;
    border-radius: 8%;
    padding: 2px;
  }
`;

export const TechIcon = styled.a`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  width: auto;
  text-decoration: none;
  color: white;

  @media (max-width: 476px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    width: auto;
    text-decoration: none;
    color: white;
  }
`;

export const TechName = styled.p`
  text-align: center;
  font-weight: normal;
`;

export const TitleTech = styled.h1`
  font-weight: bolder;
  margin: 0 auto;

  @media (max-width: 476px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
`
