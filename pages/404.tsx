'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {};

function PageError({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);

  return null;
}

export default PageError;
