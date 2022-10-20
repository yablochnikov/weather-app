import styled from 'styled-components';

type SearchInputProps = {
  searchIcon?: string;
};

export const StyledSidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 425px) {
    width: 70%;
  }
`;

export const StyledHeaderInput = styled.input<SearchInputProps>`
  height: 30px;
  width: 75%;
  background: ${(props) => props.theme.mainBg}
    url(${(props) => props.searchIcon}) 2% no-repeat;
  border-radius: 15px;
  outline: none;
  border: none;
  padding: 7px;
  padding-left: 32px;
  ::placeholder {
    color: ${(props) => props.theme.additionalGray};
    font-weight: 400;
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    height: 40px;
    width: 75%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const StyledHeaderButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;
