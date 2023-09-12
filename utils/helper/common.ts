import { LOCALE } from '../constants';

export function formatNumber(
  value: number | string | null | undefined,
  lang: 'vi' | 'en' = 'en'
) {
  const formattedNumber = new Intl.NumberFormat(
    lang === LOCALE.VI ? 'vi-VN' : 'en-US'
  ).format(value ? Number(value) : 0);
  return formattedNumber;
}
