// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// const PORT = process.env.PORT || 5000;


// // POST route to send mail
// app.post("/send-mail", async (req, res) => {
//   const { name, email, message } = req.body;
//     console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
// console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
//   // Create transporter
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//   user: process.env.EMAIL_USER,
//   pass: process.env.EMAIL_PASS
// }
//   });

//   // Mail details
//   let mailOptions = {
//     from: email,
//     to:process.env.EMAIL_USER,
//     subject: `New Contact Form Message from ${name}`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Failed to send message." });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://janyahk.github.io",
    ],
  })
);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// ADD THESE TWO LINES HERE
console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

// POST route
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});