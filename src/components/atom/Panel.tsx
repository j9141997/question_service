import React, { FC } from 'react'
import styled from 'styled-components'
import { Base } from '@components/Base/Base'

type Props = {
  title: string
  className?: string
}

export const Panel: FC<Props> = ({ title, className = '' }) => {
  return (
    <Wrapper className={className}>
      <Header></Header>
    </Wrapper>
  )
}

const Wrapper = styled(Base)
