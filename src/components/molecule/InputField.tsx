import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  labelName: string;
  name: string;
}

type labelProps = Pick<Props, 'name'>;

const InputGroup = styled.div``
const InputLabel = styled.label.attrs<labelProps>(({ name }) => ({
    for: name
}))``
const Input = styled.input``

const InputFiled: FC<Props> = ({ labelName, name }) => (
  <InputGroup>
    <InputLabel for={name}>{ labelName }</InputLabel>
    <Input name={name} />
  </InputGroup>
);

export default InputFiled;