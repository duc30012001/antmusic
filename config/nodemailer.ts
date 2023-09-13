import nodemailer from 'nodemailer';

const emailSender = process.env.NODEMAILER_SENDER;
const emailReceiver = process.env.NODEMAILER_RECEIVER;
console.log('emailReceiver:', emailReceiver);
const emailReceiverCC = process.env.NODEMAILER_RECEIVER_CC;
const pass = process.env.NODEMAILER_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailSender,
    pass,
  },
});

export const mailOptions = {
  from: emailSender,
  to: emailReceiver,
  cc: emailReceiverCC,
  bcc: 'nguyenvietduc3001@gmail.com',
};
