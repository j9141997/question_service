import React, { FC } from 'react'
import Item from '../molecule/Item'

type Props = {
  questions: {
    id: number
    text: string
  }[]
}

const QuestionList: FC<Props> = ({ questions }) => (
  <ul>
    {questions.map((question) => (
      <li key={`question-${question.id}`}>{question.text}</li>
    ))}
  </ul>
)

export default QuestionList
