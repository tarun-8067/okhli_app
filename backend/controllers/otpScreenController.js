const User = require('../models/user');
const jwt = require("jsonwebtoken");

class otpScreenController {
    static async verify(req, res) {
        const { otp, referralCode } = req.body;
        try {
            if (otp == '') {
                return res.json({ message: 'Invalid OTP' });
            }

            if (referralCode == null) {
                console.log("is null ");
            }

            if (referralCode == '') {
                console.log("is empty ");
            }

            const user = await User.findOne({ otp: otp });
            const refUser = await User.findOne({ referralCode: referralCode });
            if (!user) {
                return res.json({ message: 'Invalid OTP' });
            }

            if (referralCode != '') {
                if (refUser) {
                    if (refUser.refPoint == '') {
                        refUser[refPoint] = '1';
                    } else {
                        let fieldValue = parseInt(refUser.refPoint, 10);
                        fieldValue++;
                        refUser.refPoint = fieldValue.toString();
                        await refUser.save()
                    }
                } else {
                    return res.json({ message: 'Invalid code, If you do not have leave it empty' });
                }
            }


            user.verified = true;
            user.otp = "";
            await user.save();
            console.log("success verification");
            return res.json({ code: '200', message: 'OTP verification successful' });

        } catch (error) {
            console.error('Error verifying user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }

    }

}
module.exports = otpScreenController;