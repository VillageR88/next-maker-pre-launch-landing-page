'use server';

import nodemailer from 'nodemailer';
import { Message } from '@/app/_lib/interfaces';

export async function CreateInvoiceContactForm(prev: Message, formData: FormData): Promise<Message> {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  if (!process.env.EMAIL) return prev;
  const email = formData.get('email') as string;
  if (!email) return Message.empty;
  if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(email)) return Message.invalid;
  const htmlContent = `Hello!<br/><br/>Thank you for contacting us. We will get back to you as soon as possible.<br/><br/> If you received this email by mistake, please ignore it.<br/><br/>Best regards,<br/><br/><a href="https://www.frontendmentor.io/profile/VillageR88">VillageR88</a><br/>`;
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Contact Form',
    html: htmlContent,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error('there was an error: ', err);
        reject(err);
      } else {
        resolve(null);
      }
    });
  });
  return Message.success;
}
