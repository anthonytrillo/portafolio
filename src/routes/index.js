const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  contentHTML = `
    <h1>User Information</h1>
    <ul>
      <li>Username: ${ name } </li>
      <li>User Email: ${ email } </li>
      <li>Phone: ${ phone } </li>
    </ul>
    <p> ${ message } </p>
  `;

  const transporter = nodemailer.createTransport({
    host: 'mail.fazttech.xyz',
    port: 26,
    secure: false,
    auth: {
      user: 'test@fazttech.xyz',
      pass: 'contraseña'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail({
    from: "'FaztTech Server' <test@fazttech.xyz>",
    to: 'fazttech@gmail.com',
    subject: 'Website contact form',
    html: contentHTML
  });

  console.log('Message sent', info.messageId);

  res.redirect('/success.html');
});

module.exports = router;