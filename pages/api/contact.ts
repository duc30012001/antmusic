import { mailOptions, transporter } from '@/config/nodemailer';
import { generateEmailContent } from '@/features/contact/helper';
import { NextApiRequest, NextApiResponse } from 'next';

const APP_SHORT_NAME = process.env.APP_SHORT_NAME ?? '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;
    const subject = `[${APP_SHORT_NAME}] - ${data.subject} - ${data.email} `;
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject,
    });

    return res.status(200).json({
      message: 'Submit successfully',
    });
  } catch (error) {
    return res.status(400).json({
      error,
      message: 'Something went wrong',
    });
  }
}
