import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sgMail from '@sendgrid/mail';

const app = express();
const PORT = 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `Ahiru Media - New message from ${name}`,
    html: `<p>${message}</p><p><strong>From:</strong> ${name} &lt;${email}&gt;</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log(`SendGrid API Key: ${process.env.SENDGRID_API_KEY ? 'Set' : 'Not Set'}`);
});
