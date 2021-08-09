import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 64px;
  align-items: center;
`;

export const Right = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  width: 192px;
`;

export const Header = styled.header`
  margin: 0 45px;
  justify-content: flex-start;
  padding-top: 8px;
  height: 65px;
`;

export const OurStoryContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  h1 {
    font-size: 3.125rem;
    margin: 0;
  }

  h2 {
    font-size: 1.625rem;
    margin: 16px 0;
    font-weight: 400;
  }
  h3 {
    font-size: 23px;
    margin: 0;
    font-weight: 400;
  }
`;