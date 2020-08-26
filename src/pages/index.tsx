import React, { ComponentProps, FC } from 'react'
import { GetServerSideProps } from 'next'
import axios from '../utils/axios'

import QuestionList from '../components/organism/QuestionList'
import Button from '@material-ui/core/Button'

type Props = {
  questions: ComponentProps<typeof QuestionList>['questions']
  error?: string
}

const Index: FC<Props> = ({ questions }) => {
  return (
    <React.Fragment>
      <QuestionList questions={questions} />
      <Button variant="contained" color="primary">
        質問
      </Button>
      {/* <Form action="localhost:3001/questions">
      <input type="text" name="question" />
      <Button variant="contained" color="primary">
        回答
      </Button>
    </Form> */}
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await axios.get('/api/v1/questions')
    return { props: { questions: res.data } }
  } catch (error) {
    return { props: { questions: [], error: error.message } }
  }
}

export default Index
