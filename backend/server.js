const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const cors = require("cors");
const app = express();
const port = 8000;

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Mongo DB connection
mongoose.connect("mongodb+srv://ayurvedaokhli:Okhli321@okhli-cluster.4g4jvvt.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to mongodb");
})
    .catch((err) => {
        console.log("error in connection to mongodb", err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Routes
const loginRoutes = require('./routes/loginRoutes');
const signupRoutes = require('./routes/signupRoutes');
const addressRoutes = require('./routes/addressRoutes');
const myAddressRoutes = require('./routes/myAddressRoutes');
const editProfileRoutes = require('./routes/editProfileRoutes');
const fetchProfileRoutes = require('./routes/fetchProfileRoutes');
const otpScreenRoutes = require('./routes/otpScreenRoutes');

app.post('/login', loginRoutes);
app.post('/signup', signupRoutes);
app.post('/address', addressRoutes);
app.post('/myAddress', myAddressRoutes);
app.post('/editProfile', editProfileRoutes);
app.post('/fetchProfile', fetchProfileRoutes);
app.post('/otpScreen', otpScreenRoutes);

// //endpoint to verify OTP the mail
// app.post('/verify-otp', async (req, res) => {
// try {
//     const enteredOTP = req.body.otp;
//     if (enteredOTP == '') {
//         return res.json({ message: 'Invalid OTP' });
//     }

//     const user = await User.findOne({ otp: enteredOTP });
//     if (!user) {
//         return res.json({ message: 'Invalid OTP' });
//     }

//     if (enteredOTP === user.otp) {
//         user.verified = true;
//         user.otp = "";
//         await user.save();
//         console.log("success verification");
//         return res.status(200).json({ message: 'OTP verification successful' });
//     } else {
//         return res.status(400).json({ message: 'Invalid OTP' });
//     }

// } catch (error) {
//     console.error('Error verifying user:', error);
//     return res.status(500).json({ message: 'Internal server error' });
// }
// });


//Endpoint for Auth token authentication
app.post('/auth', async (req, res) => {
    try {
        const authToken = req.body;
        let key = Object.keys(authToken);
        key = key[0];

        jwt.verify(key, secretKey, (err, decoded) => {
            if (err) {
                console.error('JWT Verification Error:', err.message);
            } else {
                console.log('Decoded Token:', decoded);
            }
        });

        console.log("auth API Ends Here");
        return res.status(101).json({ message: 'Auth done' });

    } catch (error) {
        console.error('Error in logging in:', error);
        return res.status(500).json({ message: 'Login Failed' });
    }
});