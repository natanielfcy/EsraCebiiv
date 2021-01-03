
import nodemailer from "nodemailer";
import Contact from "../models/contact.js";


export const sendEmail = async (req, res) => {
  console.log(req.body);
  const newPost = new Contact(req.body)
  try {
    await newPost.save();
} catch (error) {
    res.status(409).json({
        message: error.message
    })
}
    // try {
      
  //       const outputMessage = `
  //       <h1>Mesaj Detayları:  </h1>
  //       <ul>
  //       <li> Email: ${req.body.email} </>
  //       </ul>
  //       <h1>Mesaj </h1>
  //       <p>${req.body.message}</p>
  //       `
    
  //       let transporter = nodemailer.createTransport({
  //           host: "smtp.gmail.com",
  //           port: 465,
  //           secure: true, 
  //           auth: {
  //             user: "esracebi.81@gmail.com", // generated ethereal user
  //             pass: "gzptecejyxtuqfkc", // generated ethereal password
  //           },
  //         });
        
  //         let info = await transporter.sendMail({
  //           from: '"İsmail, Websitenden mesaj var!" <esracebi.81@gmail.com>', // sender address
  //           to: "ismailhaytaoglu@gmail.com", // list of receivers
  //           subject: "Website Form Message", // Subject line
  //           html: outputMessage, // html body
  //         });
          
  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // } catch (error) {
    //     res.status(409).json({
    //         message: error.message
    //     })
    // }

}