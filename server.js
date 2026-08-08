import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

// POST route to send mail
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS
}
  });

  // Mail details
  let mailOptions = {
    from: email,
    to:process.env.EMAIL_USER,
    subject: `New Contact Form Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});