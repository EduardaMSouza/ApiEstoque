const nodeMailer = require('nodemailer');
const database = require('../models');
const crypto = require('crypto');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');



module.exports = async (usuario) => {
  const codigo = crypto.randomBytes(4).toString('hex');
  const contaTeste = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: contaTeste
});
  console.log(usuario[0].dataValues.email)
  const info = await transporter.sendMail({
    from: '"Loja Teste" <teste@example.com>',
    to: usuario[0].dataValues.email,
    subject: "Verificação de email",
    text: `Verifique seu email! codigo: ${codigo}`, 
    html: "<b>Hello world?</b>"
  });

  await database.VerificacaoEmails.destroy({
    where: {
      usuario_id: usuario[0].dataValues.id,
    }});
    console.log(usuario[0].dataValues.id)
  await database.VerificacaoEmails.create({
    id: uuidv4(),
    usuario_id: usuario[0].dataValues.id,
    codigoVerificacao: codigo,
    expiresIn: moment().add(1, 's').unix(),
  });
  console.log('kkkkkkkkkkkkk')
  console.log('URL:', nodeMailer.getTestMessageUrl(info));
  return info;
}
