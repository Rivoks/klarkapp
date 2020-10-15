require("react")
const mailer = require("nodemailer")

const getEmailData = (body) => {
  return (data = {
    from: "Klark <jaewon@gmail.com>",
    to: body.email,
    subject: `Pré-inscription klark (${body.plan})`,
    html: `<ul>
        <li>Tel : ${body.numero}</li>
        <li>Plan : ${body.plan}</li>
        <li>Type d'entreprise : ${body.entreprise}</li>
      </ul>`,
  })
}

const sendEmail = (body) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "yazid.bouhria@gmail.com",
      pass: "xM8rAn4b2i",
    },
  })

  const mail = getEmailData(body)

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error)
    } else {
      console.log(" email sent successfully")
    }
    smtpTransport.close()
  })
}

module.exports = { sendEmail }
