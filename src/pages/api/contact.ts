// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: any, res: any) {
   let nodemailer = require('nodemailer');

   const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
      tls: {
         // do not fail on invalid certs
         rejectUnauthorized: false
     },
   });

   const mailData = {
      from: process.env.EMAIL_USER,
      to: 'jpcontreras28@gmail.com',
      subject: `Message From ${req.body.name.value}`,
      text: req.body.msg.value + ' | Sent from: ' + req.body.email.value,
      html: `<div>
               <h3>${req.body.msg.value}</h3>
            </div>
            <p>Sent from: ${req.body.email.value}</p>`,
   };

   transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
         res.status(400).send('Something went wrong');
      }
      else {
         res.status(200).send('Email sent!');
      };
   });
}
