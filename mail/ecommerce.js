require('dotenv').config();
var express = require('express');
var router = express.Router();
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/contact', function(req, res, next) {

    const msg = {
        to: 'deyvidjlira@gmail.com',
        from: 'contato@ecommerce.com',
        subject: 'ECommerce-Test: Contact',
        html: '<h1>Novo contato recebido</h1><br/>' +
            '<p>Nome: ' + req.body["Name"] + ',</p>' +
            '<p>Email: ' + req.body["Email"] + ',</p>' +
            '<p>Mensagem: ' + req.body["Message"] + '.</p>'
    };    

    sgMail.send(msg)
        .then(function(){
            res.status(200).json({
                'message' : 'Email enviado com sucesso',
                'status' : 200
            })
            return null;
        })
        .catch(function(error){
            res.status(500).json({
                'message' : 'Ocorreu um erro ao enviar email: ' + error,
                'status' : 500
            })
    })

})

module.exports = router;