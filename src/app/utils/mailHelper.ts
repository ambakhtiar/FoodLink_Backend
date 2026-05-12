import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import config from '../config';

const transporter = nodemailer.createTransport({
    host: config.smtp_host,
    port: Number(config.smtp_port),
    secure: Number(config.smtp_port) === 465,
    auth: {
        user: config.smtp_user,
        pass: config.smtp_pass,
    },
});

console.log('Nodemailer initialized for host:', config.smtp_host);

const sendEmail = async (to: string, subject: string, templateName: string, data: any) => {
    try {
        const templatePath = path.join(process.cwd(), 'src', 'app', 'views', 'emails', `${templateName}.ejs`);
        const html = await ejs.renderFile(templatePath, data);

        const info = await transporter.sendMail({
            from: `"HelpShare" <${config.smtp_user}>`,
            to,
            subject,
            html,
        });

        return info;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};

export const MailHelper = {
    sendEmail,
};
