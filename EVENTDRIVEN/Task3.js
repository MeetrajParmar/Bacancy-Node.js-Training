// /*
// Simulate an email notification system where events are emitted for
// success/failure and multiple listeners react differently.
// */
// import { EventEmitter } from "node:events";

// class EmailService extends EventEmitter {
//   sendEmail({ to, from, subject, body }) {
//     console.log(`Sending mail to ${to} from ${from}......`);

//     setTimeout(() => {
//       const isSuccess = Math.random() > 0.4;

//       if (isSuccess) {
//         this.emit("Success", { to, subject, body, time: new Date() });
//       } else {
//         this.emit("Failed", {
//           to,
//           from,
//           time: new Date(),
//           reason: "Server Not responding",
//         });
//       }
//     }, 1000);
//   }
// }

// const emailService = new EmailService();

// emailService.on("email:success", ({ to, body, subject, time }) => {
//   console.log(
//     `✅ Email sent to ${to} | Subject: ${subject} | ${time}\nThe Content:${body}`,
//   );
// });

// emailService.on("email:success", ({ to, subject, time }) => {
//   const msg = `[SUCCESS] ${time.toLocaleString()} -> ${to} | ${subject}\n`;
//   fs.appendFileSync("success.log", msg);
// });

// emailService.on("email:failure", ({ to, subject, time, reason }) => {
//   console.log(`❌ Email FAILED to ${to} | Subject: ${subject} | ${reason}`);
// });

// emailService.on("email:failure", ({ to, subject, time, reason }) => {
//   const msg = `[FAILURE] ${time.toLocaleString()} -> ${to} | ${subject} | ${reason}\n`;
//   fs.appendFileSync("error.log", msg);
// });

// emailService.on("email:failure", (data) => {
//   console.log(`🔁 Retrying email to ${data.to} in 2 seconds...`);

//   setTimeout(() => {
//     emailService.sendEmail({
//       to: data.to,
//       subject: data.subject,
//       body: "Retrying...",
//     });
//   }, 2000);
// });

// emailService.sendEmail({
//   to: "meet@gmail.com",
//   from: "sender1@gmail.com",
//   subject: "Welcome Meet!",
//   body: "Thanks for registering.",
// });

// emailService.sendEmail({
//   to: "user2@gmail.com",
//   from: "send2@gmail.com",
//   subject: "Order Confirmed!",
//   body: "Your order has been placed successfully.",
// });
import { EventEmitter } from "node:events";
import fs from "node:fs";

class EmailService extends EventEmitter {
  sendEmail({ to, subject, body }) {
    console.log(`📨 Sending email to ${to}...`);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% success rate

      if (isSuccess) {
        this.emit("email:success", { to, subject, time: new Date() });
      } else {
        this.emit("email:failure", {
          to,
          subject,
          time: new Date(),
          reason: "SMTP server not responding",
        });
      }
    }, 1000);
  }
}

const emailService = new EmailService();

emailService.on("email:success", ({ to, subject, time }) => {
  console.log(`✅ Email sent to ${to} | Subject: ${subject} | ${time}`);
});

emailService.on("email:success", ({ to, subject, time }) => {
  const msg = `[SUCCESS] ${time.toLocaleString()} -> ${to} | ${subject}\n`;
  fs.appendFileSync("success.log", msg);
});

emailService.on("email:failure", ({ to, subject, time, reason }) => {
  console.log(`❌ Email FAILED to ${to} | Subject: ${subject} | ${reason}`);
});

emailService.on("email:failure", ({ to, subject, time, reason }) => {
  const msg = `[FAILURE] ${time.toLocaleString()} -> ${to} | ${subject} | ${reason}\n`;
  fs.appendFileSync("error.log", msg);
});

emailService.on("email:failure", (data) => {
  console.log(`🔁 Retrying email to ${data.to} in 2 seconds...`);

  setTimeout(() => {
    emailService.sendEmail({
      to: data.to,
      subject: data.subject,
      body: "Retrying...",
    });
  }, 2000);
});

emailService.sendEmail({
  to: "meet@gmail.com",
  from: "sender1@gmail.com",
  subject: "Welcome Meet!",
  body: "Thanks for registering.",
});

emailService.sendEmail({
  to: "user2@gmail.com",
  from: "sender2@gmail.com",
  subject: "Order Confirmed!",
  body: "Your order has been placed successfully.",
});
