import Seo from '@/components/seo';
import '@/styles/globals.css';
import themeConfig from '@/theme/themeConfig';
import { AppPropsWithLayout } from '@/utils/types';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import { Inter } from 'next/font/google';

dayjs.extend(weekday);
dayjs.extend(localeData);

const APP_NAME = process.env.APP_NAME ?? '';
const APP_DESCRIPTION = process.env.APP_DESCRIPTION ?? '';
const WEBSITE_URL = process.env.WEBSITE_URL ?? '';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Seo
        data={{
          title: APP_NAME,
          url: WEBSITE_URL,
          description: APP_DESCRIPTION,
          thumbnailUrl: '',
        }}
      />
      <main className={`${inter.variable} font-sans`}>
        <ConfigProvider theme={themeConfig}>
          <Component {...pageProps} />
        </ConfigProvider>
      </main>
    </>
  );
}

export default App;
