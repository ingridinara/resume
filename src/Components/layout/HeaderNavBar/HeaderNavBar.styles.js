import styled from "styled-components";
const media = {
  mobileS: "@media(min-width: 320px)",
  mobileM: "@media(min-width: 375px)",
  mobileL: "@media(min-width: 425px)",
  tablet: "@media(min-width: 768px)",
  laptop: "@media(min-width: 1024px)",
  laptopL: "@media(min-width: 1440px)",
  desktop: "@media(min-width: 2560px)",
};
export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  position: sticky;
  padding: 0.2rem 1rem 3rem 1rem;
  background-color: black;
  min-width: 90vw;
  text-align: left;

  @media (min-width: 1440px) {
    height: 4vh;
  }
`;
export const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
  padding: 0.3rem;
  font-size: 2.2rem;
  font-family: "Julius Sans One", sans-serif;
  font-family: "Khula", sans-serif;
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  animation: 0.5s slideIn forwards;
  background-color: white;
  color: black;
  @media (min-width: 375px) {
    font-size: 4rem;
  }

  &:hover {
    color: gray;
  }
`;
/* export const StyledLine = styled.div`
  width: 110%;
  height: 1px;
  background-color: gray;
  margin: 8px;
  animation: 0.5s shrink forwards;
`; */
export const StyledButton = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: 5.5rem;
  font-size: 2rem;
  padding: 0rem;
  margin-left: 7vw; //
  margin-top: 7rem;
  background-color: black;
  border-style: none;
  color: white;
  font-family: "Julius Sans One", sans-serif;
  font-family: "Khula", sans-serif;
  font-family: "Nunito", sans-serif;
  border-radius: 1rem;
  outline: none;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 1440px) {
    margin-top: 1rem;
  }
`;
export const StyledLi = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 1.5rem 0.5rem;
  margin-left: 27vw; //
  width: 50vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: 1;
  transition: height 0.3s ease;
  z-index: 1;
  border-radius: 1rem;

  margin-top: 1rem;
  @media (min-width: 425px) {
    margin-left: 19vw;
  }
  @media (min-width: 1440px) {
    margin-left: 14vw;
  }
`;

export const StyledTextPath = styled.div`
  height: auto;
  margin-left: 20%;
`;
