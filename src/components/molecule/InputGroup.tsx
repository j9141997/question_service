import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  labelName: string
  name: string
  placeholder?: string
}

const Group = styled.div`
  text-align: left;
`
const Label = styled.label``
const Input = styled.input`
  width: 100%;
  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`

const InputGroup: FC<Props> = ({ labelName, name, placeholder }) => (
  <Group>
    <Label htmlFor={name}>{labelName}</Label>
    <div>
      <Input name={name} placeholder={placeholder} />
    </div>
  </Group>
)

export default InputGroup
