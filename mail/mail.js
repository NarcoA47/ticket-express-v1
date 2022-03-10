const sendMail = async(email, fname, tx_ref) => {
  try{
    sendgridMail.setApiKey(process.env.SENDGRID_API_KEY)
    const qr = "http://api.qrserver.com/v1/create-qr-code/?data="+tx_ref;
    const message = {
      to: email,
      from: "ticketxpress3@gmail.com",
      subject: `${fname}'s Event QR Code.`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional/EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="content-Type" content="text/html; charset=utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap" rel="stylesheet">
          <title>Ticket Express HTML Email Template</title>
        </head>
        <body style="margin:0;background-color:#cccccc;">
          <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#cccccc;padding-bottom:60px;">
            <table class="main" width="100%" style="background-color:#ffffff;margin:0 auto;width:100%;max-width:600px;border-spacing:0;font-family:sans-serif;color:#171a1b;">
              <!-- TOP BORDER -->
              <tr>
                <td height="8" style="padding:0;background-color: #171a1b;"></td>
              </tr>
              <!-- LOGO SECTION -->
              <tr>
                <td style="padding:0;padding: 14px 0 4px;">
                  <table width="100%" style="border-spacing:0;">
                    <tr>
                      <td class="two-columns" style="padding:0;text-align:center;font-size:0;">
                        <table class="column" style="border-spacing:0;width:100%;max-width:300px;display:inline-block;vertical-align:top;text-align:center;">
                          <tr>
                            <td style="padding:0;padding: -2px 15px;padding: 0 0 0 10px ;">
                              <h2 style="font-size: 48px;margin: 0; font-family: 'EB Garamond', serif;;">Ticket Expréss</h2>
                            </td>
                          </tr>
                        </table>
                        <table class="column" style="border-spacing:0;width:100%;max-width:300px;display:inline-block;vertical-align:top;text-align:center;">
                          <tr>
                            <td style="padding:0;padding: 23px 30px 0 100px;">
                              <a href="https://imgbb.com/"><img src="https://i.ibb.co/r4sKfsm/black-facebook.png" alt="black-facebook" border="0" width="33" style="border:0;"></a>
                              <a href="https://imgbb.com/"><img src="https://i.ibb.co/VYjmbH0/black-instagram.png" alt="black-instagram" border="0" width="33" style="border:0;"></a>
                              <a href="https://imgbb.com/"><img src="https://i.ibb.co/GkLLb4y/black-twitter.png" alt="black-twitter" border="0" width="33" style="border:0;"></a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- TILE, TEXT & BUTTON -->
              <tr>
                <td style="padding:0;padding: 15px 0 50px;">
                  <table width="100%" style="border-spacing:0;">
                    <tr>
                      <td style="padding:0;text-align: center;padding: 15px;">
                        <p style="font-size: 20px;font-weight: bold;">Dear Chinyemba,</p>
                        <p style="line-height: 23px;font-size: 15px;padding: 5px 0 15px;">You have recently purchased a ticket for the <b>Big 10 Up</b> Event at Showgrounds<br>Below is the QR code for the event you want to attend. Please do not share this with anyone as it should be shown at the entrance of the event for it to be verified.<br><br></p>
                        <img src="${qr}" alt="QR Code" style="border:0;">
                        <p style="line-height: 23px;font-size: 15px;padding: 5px 0 15px;"><br><br>A copy has also been sent to your Ticket Express account as a backup.<br>Thank you and enjoy your event. 😄</p>
                        <br>
                        <br>
                        <p class="button-dark paragraph" style="background-color:#171a1b;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:5px;font-weight:bold;">~ Ticket Express Team.<br>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </center>
        </body>
      </html>`
    }
    await sendgridMail.send(message, (err, data) => {
      if (err) {
        console.log('Error occurred when sending email:\n' + err);
      } else{
        console.log('Mail was sent successfully')
      }
    })
    let pass = true
    return pass;
  } 
  catch(err)
  {
    console.log('EMAIL JUST FAILED TO SEND');
    console.log(err);
    let pass = false
    return pass;
  }

}

export default sendMail