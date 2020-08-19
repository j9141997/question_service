import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  labelName: string;
  name: string;
}

type labelProps = Pick<Props, 'name'>;

const Input = styled.div``
const InputLabel = styled.label``
const InputField = styled.input``

const InputGroup: FC<Props> = ({ labelName, name }) => (
  <Input>
    <InputLabel htmlFor={name}>{ labelName }</InputLabel>
    <div>
      <InputField name={name} />
    </div>
  </Input>
);

export default InputGroup;