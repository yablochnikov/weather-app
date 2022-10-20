import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBg};
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
