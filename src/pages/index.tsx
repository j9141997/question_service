import React, { ComponentProps } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { QuestionList } from './components/organism/QuestionList';
import Form from './components/organism/Form';

type Props = {
  questions: ComponentProps<typeof QuestionList>["questions"];
}

const Index = ({
  questions
}: Props) => (
  <React.Fragment>
    <QuestionList questions={questions}/>
     <Button variant="contained" color="primary">
        質問
    </Button >
    <Form name="answer" />
  </React.Fragment>
);

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3001/api/v1/questions')
    console.log(res.data);
    return {
      props: {
        questions: res.data
      }
    }
  } catch(e) {
    console.log(e);
    return;
  }
}

export default Index;