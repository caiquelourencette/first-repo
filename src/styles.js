import styled from 'styled-components';

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
  margin: 0;
  padding: 0 45px;
  justify-content: flex-start;
  padding-top: 8px;
  height: 65px;
  max-width: 100%;
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

export const Mytext = styled.input`
  padding: 0 2px 0 10px;
  border-top: 0;
  border-bottom: 0;
  width: 75%;
  height: 100%;
`;

export const Buttonstyle = styled.button`
  height: 100%;
  color: #ffff;
  background-color: #f40612;
  font-size: 1.625rem;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0;
  border-bottom: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 24px;
  width: 100%;
  height: 54px;
 

  @media only screen and (max-width: 860px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 1080px) {
    max-width: 633px;
  }

  max-width: 633px;
`;
