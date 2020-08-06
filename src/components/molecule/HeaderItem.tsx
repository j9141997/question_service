import React from 'react';
import Link from 'next/link';

import { Button } from '../atom/Button';

export const HeaderItem = () => (
  <React.Fragment>
    <Link href="/register">
      ログイン / 新規登録
    </Link>
    <Button color="inherit">
      yoshidajunki
    </Button>
    <Button color="inherit">
      回答する
    </Button>
  </React.Fragment>
);