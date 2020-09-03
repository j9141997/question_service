import React, { ComponentProps, FC } from 'react'
import { GetServerSideProps } from 'next'
import axios from '../utils/axios'

import QuestionList from '../components/organism/QuestionList'

type Props = {
  questions: ComponentProps<typeof QuestionList>['questions']
  error?: string
}

const Index: FC<Props> = ({ questions }) => {
  return (
    <React.Fragment>
      <h1>the value: {process.env.FIREBASE_API_KEY}</h1>
      <QuestionList questions={questions} />
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
