import styled from 'styled-components';

export const Container = styled.div`
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
