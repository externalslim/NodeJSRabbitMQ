const nodemailer = require('nodemailer');
const fs = require('fs');

let configurationData = fs.readFileSync('./configurations/configuration.json');
let configuration = JSON.parse(configurationData);

var transport = nodemailer.createTransport({
    host: configuration.dev.MailService.Host,
    port: configuration.dev.MailService.Port,
    auth: {
        user: configuration.dev.MailService.User,
        pass: configuration.dev.MailService.Password
    }
});

module.exports.sendMail = function (mailModel) {

    console.log(mailModel);

    var message = {};
    var _cc = '';
    var _bcc = '';
    var _to = '';

    if (mailModel.cc != null) {
        mailModel.cc.forEach(element => {
            console.log(element);
            _cc += element + ','
        });
    }

    if (mailModel.bcc != null) {
        mailModel.bcc.forEach(element => {
            console.log(element);
            _bcc += element + ','
        });
    }


    if (mailModel.to != null) {
        mailModel.to.forEach(element => {
            console.log(element);
            _to += element + ','
        });
    }

    message.from = mailModel.from;
    message.html = mailModel.body;
    message.subject = mailModel.subject;
    message.cc = _cc != '' ? _cc : '';
    message.bcc = _bcc != '' ? _bcc : '';
    message.to = _to != '' ? _to : '';


    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });

};