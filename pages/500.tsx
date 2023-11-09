/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';

type Props = {};

const PageError: NextPageWithLayout = ({}: Props) => {
  return <p>Something went wrong</p>;
};

PageError.Layout = PublicLayout;

export default PageError;
