import React from 'react';
import { Button } from '../atom/Button';

export const HeaderItem = () => (
  <React.Fragment>
    <Button color="inherit">
      ログイン / 新規登録
    </Button>
    <Button color="inherit">
      回答する
    </Button>
  </React.Fragment>
);