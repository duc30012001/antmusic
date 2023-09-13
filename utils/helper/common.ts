import { toast } from 'react-toastify';
import { LOCALE } from '../constants';

type TypeMessage = 'success' | 'info' | 'warning' | 'error';

export const showNotification = (type: TypeMessage, message: string) => {
  const options = {
    type,
  };
  toast(message, { ...options, toastId: message });
};

export function formatNumber(
  value: number | string | null | undefined,
  lang: 'vi' | 'en' = 'en'
) {
  const formattedNumber = new Intl.NumberFormat(
    lang === LOCALE.VI ? 'vi-VN' : 'en-US'
  ).format(value ? Number(value) : 0);
  return formattedNumber;
}
