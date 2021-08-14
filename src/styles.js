import styled from 'styled-components';

export const Header = styled.header`
  justify-content: flex-start;
  padding-top: 8px;
  height: 65px;
  max-width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  margin-top: 18px;
`;

export const Right = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  width: 192px;
  margin-right: 45px;
`;

export const OurStoryContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
    padding-bottom: 14px;
  }
`;

export const Image = styled.img`
  margin-left: 45px;
`;
