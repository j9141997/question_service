import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import Button from '@material-ui/core/Button';

import Form from './components/organism/Form';

type Props = {
  data: {
    data?: []
  }
}

type question = {
  id: number
  text: string
}

function Index(props: Props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.data.map((question: question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
      <Button variant="contained" color="primary">
        質問
      </Button >
      <Form name="answer" />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3001/api/v1/questions')
    console.log(res.data);
    return {
      props: {
        data: res.data
      }
    }
  } catch(e) {
    console.log(e);
    return;
  }
}

export default Index