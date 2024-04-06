const User = require('../models/user');
const jwt = require("jsonwebtoken");

class fetchProfileController {
    static async fetch(req, res) {

        console.log('In fetch profile');
        const { token, scKi } = req.body;
        const userID = jwt.verify(token, scKi);
        const user = await User.findById(userID.userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json(user);
    }

}
module.exports = fetchProfileController;