const mailSender = require('./mail_bus/mail');
const mailModel = require('./models/mail.js');
const fs = require('fs');
var amqp = require('amqplib/callback_api');

let configurationData = fs.readFileSync('./configurations/configuration.json');
let configuration = JSON.parse(configurationData);


amqp.connect('amqp://'+configuration.dev.RabbitMQ.User+':'+configuration.dev.RabbitMQ.Password+'@'+configuration.dev.RabbitMQ.Host, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = configuration.dev.RabbitMQ.Queues.MailQueue;

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function (msg) {
            console.log(msg.content.toString());

            var model = JSON.parse(msg.content.toString());

            mailModel.cc = model.CC;
            mailModel.bcc = model.BCC;
            mailModel.to = model.To;
            mailModel.from = model.From;;
            mailModel.body = model.Body;
            mailModel.subject = model.Subject;
            
            mailSender.sendMail(mailModel);

        }, {
                noAck: true
            });
    });
});