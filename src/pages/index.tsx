import React, { ComponentProps, FC, useContext } from 'react'
import { GetServerSideProps } from 'next'
import axios from '../utils/axios'

import QuestionList from '../components/organism/QuestionList'
import { AuthContext } from '../context/Auth'

type Props = {
  questions: ComponentProps<typeof QuestionList>['questions']
  error?: string
}

const Index: FC<Props> = ({ questions }) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <React.Fragment>
      <div className="auth">
        {currentUser && (
          <div>
            {currentUser.email}
            {currentUser.uid}
          </div>
        )}
      </div>
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
