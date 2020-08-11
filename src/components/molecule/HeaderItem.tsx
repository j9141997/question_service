import React from 'react';
import Link from 'next/link';

import { MainButton } from '../atom/MainButton'
import { SubButton } from '../atom/SubButton';

export const HeaderItem = () => (
  <React.Fragment>
    <Link href="/auth/register" passHref>
      <MainButton>
        新規登録
      </MainButton>
    </Link>
    <Link href="/auth/login">
      <SubButton>
        ログイン
      </SubButton>
    </Link>
  </React.Fragment>
);

