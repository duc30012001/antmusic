const { i18n } = require('./next-i18next.config');
const path = require('path');
require('dotenv').config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WHATSAPP: process.env.WHATSAPP,
    EMAIL: process.env.EMAIL,
    WEBSITE_URL: process.env.WEBSITE_URL,
    TELEGRAM: process.env.TELEGRAM,
    PRIMARY_COLOR: process.env.PRIMARY_COLOR,
    APP_NAME: process.env.APP_NAME,
    APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    APP_SHORT_NAME: process.env.APP_SHORT_NAME,
    APP_IMAGE: process.env.APP_IMAGE,
    NODEMAILER_SENDER: process.env.NODEMAILER_SENDER,
    NODEMAILER_RECEIVER: process.env.NODEMAILER_RECEIVER,
    NODEMAILER_RECEIVER_CC: process.env.NODEMAILER_RECEIVER_CC,
    NODEMAILER_PASS: process.env.NODEMAILER_PASS,
    LOGIN_URL: process.env.LOGIN_URL,
  },
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
