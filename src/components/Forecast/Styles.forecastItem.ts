import styled from 'styled-components';

export const StyledForecastItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  width: 10%;
  height: 100px;
  background-color: ${(props) => props.theme.sidebarBg};
  border-radius: 15px;
  text-align: center;
  padding-top: 16px;
  img {
    margin: 10px 0 10px 0;
    width: 24px;
    height: 24px;
  }
`;

export const StyledMaxTemp = styled.span``;

export const StyledMinTemp = styled.span`
  color: ${(props) => props.theme.additionalGray};
`;

export const StyledTemperatures = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
