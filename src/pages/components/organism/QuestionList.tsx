import React from 'react';
import axios from 'axios';

type Props = {
  questions: {
    id: number
    text: string
  }[]
}

export const QuestionList = ({
  questions,
}: Props) => (
  <ul>
    {questions.map((question) => (
      <li key={`question-${question.id}`}>{question.text}</li>
    ))}
  </ul>
);