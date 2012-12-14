/// client -- use the SMTP client with a Message object.
//
// For simple messages, it's safer to use Mail (see examples/mail.js).
// This example uses a Message object to add some structure and
// safety.

var sys = require('sys'),
    mail = require('../lib/mail');

var message = new mail.Message({
  from: 'pailin.electricity@gmail.com',
  to: ['chivorn.khun@gmail.com'],
  subject: 'Hello from Node.JS'
})
.body('Hello from Node.JS');

var client = mail.createClient(587, 'smtp.gmail.com');
client.setLogin('pailin.electricity@gmail.com', 'everyone6666');
client.on('error', function(err) {
  client.end();
  throw err;
});

var transaction = client.mail(message.sender(), message.recipients());
transaction.on('ready', function() {
  transaction.end(message.toString());
  transaction.on('end', function() {
    sys.debug('Message sent!');
    client.quit();
  });
});

