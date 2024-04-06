const User = require('../models/user');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
class loginController {

    static async login(req, res) {
        // To create auth Key
        const generateSecretKey = () => {
            const secretKey = crypto.randomBytes(32).toString("hex");
            return secretKey;
        }
        const secretKey = generateSecretKey();

        try {
            const { email, password } = req.body;

            //check if the user exists
            const user = await User.findOne({ email });

            if (!user) {
                return res.json({ code: '203', message: 'Invalid Email' });
            }

            //check if password is correct or not
            if (user.password !== password) {
                return res.json({ code: '204', message: "Invalid password" });
            }

            //generate a token
            const token = jwt.sign({ userId: user._id }, secretKey);
            res.json({ code: '205', authToken: token, scKi: secretKey });


        } catch (error) {
            console.error('Error in logging in:', error);
            return res.status(500).json({ message: 'Login Failed' });
        }
    }
}

module.exports = loginController;

