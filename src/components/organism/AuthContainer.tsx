import { FC } from 'react'
import styled from 'styled-components'

const AuthContainer: FC = ({ children }) => (
  <Article>
    <CenterContainer>{children}</CenterContainer>
  </Article>
)

const Article = styled.article`
  @media (min-width: 1024px) {
    width: 470px;
    margin: 60px auto;
  }
  margin: 40px 16px 80px;
  text-align: center;
`
const CenterContainer = styled.div`
  text-align: center;
`

export default AuthContainer
