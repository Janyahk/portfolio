import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST route to send mail
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "janyahkumarappa@gmail.com",      // your Gmail
      pass:"qnqj ngdv kchd bwpo" ,  
    //   "wcuw qcgg gqhg odmc"            // app password (IMPORTANT)
    },
  });

  // Mail details
  let mailOptions = {
    from: email,
    to: "janyahkumarappa@gmail.com",
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

app.listen(5000, () => console.log("Server running on port 5000"));
