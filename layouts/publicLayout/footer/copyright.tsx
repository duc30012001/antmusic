// import footerImage from '@/assets/footer-payment-options-no-payoneer.webp';
import dayjs from 'dayjs';
// import Image from 'next/image';

type Props = {};

const APP_SHORT_NAME = process.env.APP_SHORT_NAME ?? '';

function CopyRight({}: Props) {
  const currentYear = dayjs().format('YYYY');
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between">
      <span>
        ©{currentYear} {APP_SHORT_NAME}. All Rights Reserved.
      </span>
    </div>
  );
}

export default CopyRight;
