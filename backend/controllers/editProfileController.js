const User = require('../models/user');
const jwt = require("jsonwebtoken");

class editProfileController {
    static async edit(req, res) {
        const { token, scKi, name, email, mobile, gender, age } = req.body;
        const userID = jwt.verify(token, scKi);
        const user = await User.findById(userID.userId);
        const NewUser = {
            name: name,
            email: email,
            mobile: mobile,
            gender: gender,
            age: age
        };
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const result = await User.updateOne({ _id: userID.userId }, { $set: NewUser });
    }

}
module.exports = editProfileController;