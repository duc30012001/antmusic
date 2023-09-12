'use client';

import { FloatButton } from 'antd';
import { FaChevronUp } from 'react-icons/fa';

type Props = {};

export function ScrollToTopButton({}: Props) {
  return (
    <FloatButton.BackTop
      icon={<FaChevronUp />}
      style={{
        bottom: 110,
      }}
    />
  );
}
