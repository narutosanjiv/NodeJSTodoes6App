let emailQueue = new Queue('email-service', 'redis://127.0.0.1:6379')
const EmailService = require('../services/Email.Service')
const nodemailer = require("nodemailer");
const Afterprocess = function(err, data){

}
emailQueue.process(function(job){ // don't forget to remove the done callback!
  // Simply return a promise
  let email_service = new EmailService(nodemailer)
  return email_service.send(job.data).then(Afterprocess);
});