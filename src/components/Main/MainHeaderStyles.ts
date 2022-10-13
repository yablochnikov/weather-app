import styled from 'styled-components';

export const StyledMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDaysChange = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  button {
    font-weight: 600;
    font-size: 22px;
    color: #b9b9b9;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
  button.active {
    color: #000;
  }
`;

export const StyledMetricChange = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    background-color: #fff;
    color: #000;
  }
  button.active {
    background-color: #000;
    color: #fff;
  }
`;
