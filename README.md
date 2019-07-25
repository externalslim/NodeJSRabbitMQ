# NodeJSRabbitMQ
The basic service of this application is to send mail.


# Configuration
At first, you will see the file which under the configurations/configuration.json.,
you have to set your configurations here as you can see. Variables are,

RabbitMQ Host URL,
RabbitMQ User (optional),
RabbitMQ Password (optional),
RabbitMQ Queues MailQueue (optional),

MailService Host URL,
MailService Port,
MailService User,
MailService Password

{
    "dev": {

        "RabbitMQ": {
            "Host":"xx.xx.xx.xx",
            "User":"guest",
            "Password":"guest",
            "Queues" : {
                "MailQueue": "MailQueue"
            }
        },

        "MailService": {
            "Host":"xx.xx.xx.xx",
            "Port":0,
            "User":"xx@xx",
            "Password":"xx"
        }

    },

    "prod": {
    
        "RabbitMQ": {
            "Host":"xx.xx.xx.xx",
            "User":"guest",
            "Password":"guest",
            "Queues" : {
                "MailQueue": "MailQueue"
            }
        },

        "MailService": {
            "Host":"xx.xx.xx.xx",
            "Port":0,
            "User":"xx@xx",
            "Password":"xx"
        }

    }
}

#MailQueue
This application is working as a consumer/listener to your existing RabbitMQ. You have to set your MailQueue parameter which you named your queue.

#Mail Body
In your mail body, To, CC, BCC are must be an array format and also CC and BCC are optional.
Your body parameter is support the HTML!.

Your mail body has to be like this: 
{
  "Subject": "Test Subject",
  "From": "xx@xx", 
  "To": [
  	"xx@xx",
    "yy@yy",
  ],
  "CC": [
    "zz@zz",
    "mm@mm"
  ],
  "BCC": [
    "cc@cc",
    "tt@tt"
  ],
  "Body":'<p>Mail with support HTML</p>'
}

Have fun!
