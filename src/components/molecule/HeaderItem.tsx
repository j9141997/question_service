import React from 'react';
import Link from 'next/link';

import { PrimaryButton, SecondaryButton } from '../atom/Button'

export const HeaderItem = () => (
  <React.Fragment>
    <Link href="/auth/register" passHref>
      <PrimaryButton>
        新規登録
      </PrimaryButton>
    </Link>
    <Link href="/auth/login" passHref>
      <SecondaryButton>
        ログイン
      </SecondaryButton>
    </Link>
  </React.Fragment>
);

