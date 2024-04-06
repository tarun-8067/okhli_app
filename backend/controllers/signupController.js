const User = require('../models/user');
const nodemailer = require("nodemailer");

class signupController {
    static async signup(req, res) {

        function generateReferralCode() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let referralCode = '';
            for (let i = 0; i < 8; i++) {
                referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return referralCode;
        };

        function checkVerified(user) {
            if (user.verified) {
                return true;
            } else {
                return false;
            }
        }

        try {
            const { user } = req.body;
            const name = user.name;
            const email = user.email;
            const phNo = user.phNo;
            const password = user.password;
            const cnfPassword = user.cnfPassword;
            let check = false;


            //check if the Email is already registered
            const existingEmail = await User.findOne({ email });
            if (existingEmail) {
                check = await checkVerified(existingEmail);
                if (check) {
                    return res.json({ code: '203', message: "Email already Registered!" });
                } else {
                    if (existingEmail.phNo !== phNo) {
                        const temp = await User.findOne({ phNo });
                        if (temp) {
                            return res.json({ code: '204', message: "Mobile No. already Registered!" });
                        }
                    }
                }
            } else {
                //check if the Mobile No is already registered
                const existingPhNo = await User.findOne({ phNo });
                if (existingPhNo) {
                    const tp = await checkVerified(existingPhNo);

                    if (tp) {
                        return res.json({ code: '204', message: "Mobile No. already Registered!" });
                    } else {
                        await User.findByIdAndDelete(existingPhNo._id);
                        check = true;
                    }
                } else {
                    check = true;
                }
            }

            //generate OTP
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log("6 digit OTP is ", otp);

            const transporter = nodemailer.createTransport({
                //configure the email service
                service: "gmail",
                auth: {
                    user: "okhlitest@gmail.com",
                    pass: "tigj ottk kvui koev"
                }
            });

            //compose the email message
            const mailOptions = {
                from: "okhlitest@gmail.com",
                to: email,
                subject: "OTP for Email Verification",
                text: `Your OTP is: ${otp}`,
            };

            //send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.json({ code: "205", message: 'Error sending OTP email.' });
                }
                console.log('Email sent:', info.response);
                res.json({ code: "206", userId: newUser.id, message: 'Email sent successfully.' });
            });

            const refCode = await generateReferralCode();

            //Create a new User
            const newUser = new User({ name, email, phNo, password, cnfPassword, otp, verified: false, referralCode: refCode, refPoint: '0' });

            console.log("New user is :  ", newUser);
            //save user to the database
            if (check) {
                const data = await newUser.save();
            } else {
                const oldUser = { name, email, phNo, password, cnfPassword, otp, verified: false, referralCode: refCode, refPoint: '0' };
                const result = await User.updateOne({ _id: existingEmail._id }, { $set: oldUser });
            }

            return res.json({ code: "210", message: 'Please enter your OTP sent to your email' });


        } catch (error) {
            console.log("error registering new User", error);
            res.status(500).json({ message: "Registration failed" });
        }
    }
}

module.exports = signupController;

