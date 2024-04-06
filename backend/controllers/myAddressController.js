const User = require('../models/user');
const jwt = require("jsonwebtoken");

class myAddressController {
    static async myAddress(req, res) {
        const { token, scKi } = req.body;
        const userID = jwt.verify(token, scKi);
        const user = await User.findById(userID.userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json(user.addresses);
    }

}
module.exports = myAddressController;