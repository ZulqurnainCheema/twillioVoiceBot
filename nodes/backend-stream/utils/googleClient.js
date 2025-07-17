import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "zulqurnaincheema45@gmail.com",
    pass: "jpeq hvgh nclj gzpl",
  },
});
export async function  sendAppointmentEmail(
  { name, email }) {
  const mailOptions = {
    from: "zulqurnaincheema45@gmail.com",
    to: email,
    subject: "Hello from VoiceBot",
    text: `Hi ${name},
  Here you can get an apointment.
  https://calendly.com/zulqurnaincheema1/30min
  `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
        resolve("There was an error while sending the mail"); // Not rejecting to avoid breaking flow
      } else {
        console.log("Email sent: ", info.response);
        resolve("Email sent successfully");
      }
    });
  });
}
