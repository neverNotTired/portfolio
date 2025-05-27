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

app.get('/api/gitgraph', async (req, res) => {
  const token = process.env.GITHUB_TOKEN; // You'll need to add this in your .env
  const username = process.env.GITHUB_USERNAME || 'neverNotTired';

  if (!token) {
    return res.status(500).json({ error: 'GitHub token not configured' });
  }

  const query = `
    {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const githubRes = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await githubRes.json();

    if (data.errors) {
      console.error('GitHub API error:', data.errors);
      return res.status(500).json({ error: 'GitHub API error', details: data.errors });
    }

    res.json(data.data.user.contributionsCollection.contributionCalendar);
  } catch (err) {
    console.error('GitHub fetch error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log(`SendGrid API Key: ${process.env.SENDGRID_API_KEY ? 'Set' : 'Not Set'}`);
});
