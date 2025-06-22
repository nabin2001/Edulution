const nodemailer = require("nodemailer");
require("dotenv").config();
const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true, // use SSL
              auth: {
                user: "edulution2024@gmail.com",
                pass: "zaqd fecq qxhy edxg",
              },
            })


            let info = await transporter.sendMail({
                from: 'Edulution',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;
