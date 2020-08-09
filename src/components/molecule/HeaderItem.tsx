import React from 'react';
import Link from 'next/link';

import { Button } from '../atom/Button';

export const HeaderItem = () => (
  <React.Fragment>
    <Link href="/auth/register">
      <a>
        ログイン / 新規登録
      </a>
    </Link>
    <Button color="inherit">
      回答する
    </Button>
  </React.Fragment>
);