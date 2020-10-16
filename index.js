// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const cookieParser = require("cookie-parser")

// const app = express()
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(cookieParser())
// app.use(cors())

// const { sendEmail } = require("./mail")

// app.post("/ouss", (req, res) => {
//   console.log(req.body)
//   res.status(200).send()
// })

// app.post("/api/send-email", (req, res) => {
//   console.log(req.body)

//   if (
//     !(
//       req.body.numero &&
//       ["SOLO", "STANDARD", "PREMIUM"].includes(req.body.plan.toUpperCase()) &&
//       [
//         "SA",
//         "SAS",
//         "SASU",
//         "SARL",
//         "EURL",
//         "Profession-libérale",
//         "Micro-entreprise",
//         "Autre",
//       ].includes(req.body.entreprise) &&
//       req.body.email
//     )
//   )
//     return res.status(400).json({
//       message:
//         "Désolé veuillez préciser l'email, le numéro, plan et entreprise svp",
//     })
//   // numero: this.state.inputValue,
//   //       plan: this.state.value1,
//   //       entreprise: this.state.value2,
//   //       email: "rivokstv@gmail.com",
//   sendEmail(req.body, req.body.name)
//   res.status(200).send()
// })

// app.listen(5000, () => {
//   console.log("Server Running at 5000 ")
// })
