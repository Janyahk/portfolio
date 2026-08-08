import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// ===============================
// Middleware
// ===============================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://janyahk.github.io",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ===============================
// Port
// ===============================

const PORT = process.env.PORT || 5000;

// ===============================
// Environment check
// ===============================

console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

// ===============================
// Test route
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running 🚀",
  });
});

// ===============================
// Contact form
// ===============================

app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all fields.",
    });
  }

  try {
    // Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email information
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,

      subject: `New Contact Form Message from ${name}`,

      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

// ===============================
// Start server
// ===============================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";

// const app = express();

// // ===============================
// // Middleware
// // ===============================

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://janyahk.github.io",
//     ],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// app.use(bodyParser.json());

// // ===============================
// // Port
// // ===============================

// const PORT = process.env.PORT || 5000;

// // ===============================
// // Check Environment Variables
// // ===============================

// console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
// console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

// // ===============================
// // Test Route
// // ===============================

// app.get("/", (req, res) => {
//   res.send("Portfolio backend is running 🚀");
// });

// // ===============================
// // Send Email
// // ===============================

// app.post("/send-mail", async (req, res) => {
//   const { name, email, message } = req.body;

//   // Validate form data
//   if (!name || !email || !message) {
//     return res.status(400).json({
//       success: false,
//       message: "Please fill all fields.",
//     });
//   }

//   try {
//     // Gmail SMTP configuration
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email details
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `New Contact Form Message from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}

// Message:
// ${message}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     console.log("Email sent successfully");

//     res.status(200).json({
//       success: true,
//       message: "Message sent successfully!",
//     });
//   } catch (error) {
//     console.error("EMAIL ERROR:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to send message.",
//     });
//   }
// });

// // ===============================
// // Start Server
// // ===============================

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });