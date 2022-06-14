var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function(req, res) {
  console.log(req.body)
  let email = req.body.email
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "68c688e856ed5b",
      pass: "b5cac86299cf66"
    }
  });

  let info = await transporter.sendMail({
    from: 'foo@example.com', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `nome: ${req.body.nome}, email:${req.body.email}`, // plain text body
    html: `<b>Nome: ${req.body.nome} e email: ${req.body.email}</b>`, // html body
  });

  res.send('E-mail enviado com sucesso')

})

module.exports = router;
