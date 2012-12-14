/// mail -- send an email
//
// This is the simplest, safest way to send an email.  Headers are
// escaped and folded, email addresses are validated, and the body is
// validated and wrapped.

var sys = require('sys'),
    mail = require('../lib/mail').Mail({
      host: 'smtp.gmail.com',
      port: 587,
      username: 'pailin.electricity@gmail.com',
      password: 'everyone6666'
    });

mail.message({
   from: 'pailin.electricity@gmail.com',
  to: ['chivorn.khun@gmail.com'],
  subject: 'Hello from Node.JS'
  })
  .body('Node speaks SMTP.')
  .send(function(err) {
    if (err) throw err;
    sys.debug('Sent!');
  });
