import { FC } from 'react';
import styled from 'styled-components';

interface UVInfoProps {
  data?: number;
  children: JSX.Element;
}

const StyledData = styled.p`
  margin: 0 auto;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
`;

const UVInfo: FC<UVInfoProps> = ({ data, children }) => {
  return (
    <>
      <StyledData>{data}</StyledData>
      {children}
    </>
  );
};

export default UVInfo;
