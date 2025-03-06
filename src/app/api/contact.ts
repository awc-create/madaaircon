import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form Parsing Error" });

    const { name, email, phone, postcode, subject, subService, message } = fields;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Request: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPostcode: ${postcode}\nService: ${subject}\nSub-Service: ${subService}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email Sent Successfully!" });
    } catch (error) {
      console.error("Email Error:", error);
      res.status(500).json({ error: "Email Sending Failed" });
    }
  });
};

export default handler;
