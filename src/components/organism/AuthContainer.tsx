import { FC } from 'react';
import styled from 'styled-components';

const CenterContainer = styled.div`
  text-align: center;
`
const AuthContainer: FC = ({ children }) => (
  <CenterContainer>
    { children }
  </CenterContainer>
);

export default AuthContainer;