import styled from 'styled-components';

type SearchInputProps = {
  searchIcon?: string;
};

export const StyledSidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderInput = styled.input<SearchInputProps>`
  width: 240px;
  background: ${(props) => props.theme.mainBg}
    url(${(props) => props.searchIcon}) 5% no-repeat;
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
`;

export const StyledHeaderButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;
