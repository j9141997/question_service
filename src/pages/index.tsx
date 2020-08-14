import React, { ComponentProps } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { QuestionList } from '../components/organism/QuestionList';
import Form from '../components/organism/Form';

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
    <Form action="localhost:3001/questions">
      <input type="text" name="question" />
      <Button variant="contained" color="primary">
        回答
      </Button>
    </Form>
  </React.Fragment>
);

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3001/api/v1/questions');
    return {
      props: {
        questions: res.data
      }
    }
  } catch(e) {
    return {
      props: {
        questions: []
      }
    }
  }
}

export default Index;