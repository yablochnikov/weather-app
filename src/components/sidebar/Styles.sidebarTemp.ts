import styled from 'styled-components';

export const StyledHeading1 = styled.h1`
  margin-top: 40px;
  font-weight: 300;
  font-size: 45px;
  position: relative;
  span {
    font-size: 25px;
    position: absolute;
    top: 0;
  }

  @media (max-width: 1024px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    span {
      font-size: 20px;
    }
  }
`;
