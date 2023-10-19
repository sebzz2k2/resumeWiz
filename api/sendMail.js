const sgMail = require("@sendgrid/mail");
const fs = require("fs");

const apiKey = process.argv[2];

sgMail.setApiKey(apiKey);
const data = fs.readFileSync("resume.pdf", (err, data) => {});

let msg = {
  to: "sebincm2002@gmail.com",
  from: "sebinsebzz2002@gmail.com",
  subject: `Updated Resume - ${new Date().toLocaleDateString()}`,
  text: "This email contains an updated resume.",
  attachments: [
    {
      content: data.toString("base64"),
      filename: "resume.pdf",
      path: "./resume.pdf",
      type: "application/pdf",
      disposition: "attachment",
      content_id: "myId",
    },
  ],
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
