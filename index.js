var express     = require("express"),
    app         = express(),
    

//SendGrid
sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const mesg = {
    to: 'toemail.gmail.com',
    from: 'fromemail@gmail.com',
    subject: 'Subject',
    text: 'Insert html here'
};
      sgMail
        .send(mesg)
        .then(() => {
        }, error => {
          console.error(error);
       
          if (error.response) {
            console.error(error.response.body)
          }
        });




app.listen(process.env.PORT|| 8080, process.env.IP, function(){
   console.log("The Server Has Started!");
});