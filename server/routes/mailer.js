import express from 'express';
import mailer from 'nodemailer';

const router = express.Router();

const transporter = mailer.createTransport({
    service:"gmail",
    auth:{
        user:"dhanushns2004@gmail.com",
        pass:"kzgg mype vodf debs"
    },
});

const send_otp = (email,otp,res)=>{
    const mail_option = {
        from:"dhanushns2004@gmail.com",
        to:email,
        subject:"OTP verification from JobSync",
        text : 'Your OTP code '+ otp
    };

    transporter.sendMail(mail_option,(error,info)=>{
        if(error) return res.status(400).json({error : "Error sending otp-mail check mailer file"});
        return res.status(201).send(true);
    });
}

router.get("/onboard_seller/send-otp", async (req,res)=>{
    const email = req.query.email;
    console.log(email);
    const otp = Math.floor(100000 + Math.random() * 900000);
    send_otp(email,otp,res);
})

export default router;
