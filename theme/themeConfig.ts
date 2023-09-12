import { ThemeConfig, theme } from 'antd';

const themeConfig: ThemeConfig = {
  token: {
    fontSize: 14,
    // colorPrimary: process.env.PRIMARY_COLOR,
    fontFamily: 'Inter, sans-serif',
    // colorTextBase: 'rgb(226, 232, 240)',
    // colorBgBase: 'rgb(15, 23, 42)',
    // colorBorder: 'rgb(226, 232, 240)',
  },
  algorithm: theme.darkAlgorithm,
};

export default themeConfig;
