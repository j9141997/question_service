import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  labelName: string
  name: string
  placeholder?: string
  value: string | number
  type?: 'text' | 'number' | 'email' | 'password'
  onChange: () => void
}

const InputGroup: FC<Props> = ({
  labelName,
  name,
  value,
  placeholder,
  type = 'text',
  onChange,
}) => (
  <Group>
    <Label htmlFor={name}>{labelName}</Label>
    <div>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  </Group>
)

InputGroup.defaultProps = {
  type: 'text',
}

const Group = styled.div`
  text-align: left;
`
const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 4px;
  display: block;
`
const Input = styled.input`
  width: 100%;
  padding: 8px 1rem;
  margin-bottom: 8px;
  border: 1px solid transparent;
  -webkit-appearance: none;
  appearance: none;
  border-color: #8e8e93;
  border-radius: 4px;
  height: 44px;
  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1023px) {
    height: 40px;
  }
`

export default InputGroup
