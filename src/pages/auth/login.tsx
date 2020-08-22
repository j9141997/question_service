import React, { ComponentProps } from 'react'
import Button from '@material-ui/core/Button'
import { QuestionList } from '../../components/organism/QuestionList'
import Form from '../../components/organism/Form'

const login = (props) => (
  <React.Fragment>
    <h1>ログイン</h1>
    <input type="text" name="email" />
    <input type="text" name="password" />
    <input type="submit" value="ログインする" />
  </React.Fragment>
)

export default login
