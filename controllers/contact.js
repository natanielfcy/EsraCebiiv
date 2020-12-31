import Contact from "../models/contact.js";
import nodemailer from "nodemailer";


export const sendEmail = async (req, res) => {
    try {
        const newContact = new Contact(req.body)
        const outputMessage = `
        <h1>Mesaj Detayları:  </h1>
        <ul>
        <li> Email: ${newContact.email} </>
        </ul>
        <h1>Mesaj </h1>
        <p>${newContact.message}</p>
        `
    
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
              user: "esracebi.81@gmail.com", // generated ethereal user
              pass: "gzptecejyxtuqfkc", // generated ethereal password
            },
          });
        
          let info = await transporter.sendMail({
            from: '"İsmail, Websitenden mesaj var!" <esracebi.81@gmail.com>', // sender address
            to: "ismailhaytaoglu@gmail.com", // list of receivers
            subject: "Website Form Message", // Subject line
            html: outputMessage, // html body
          });
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }

}