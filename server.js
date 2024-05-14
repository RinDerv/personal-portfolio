
=======
const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodeMailer.createTransport({
  host:'mail.openjavascript.info',
  port: 465,
  secure: true,
  auth: {
    user: "rinasdervishi10@gmail.com",
    pass: "jxznhdruionzujik"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "rinasdervishi10@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.json({ code: 500, status: "Error sending email" });
    } else {
      console.log("Email sent successfully");
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});