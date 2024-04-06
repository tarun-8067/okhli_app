const User = require('../models/user');
const jwt = require("jsonwebtoken");

class addressController {
    static async address(req, res) {
        try {
            const { token, scKi, address } = req.body;

            const userID = jwt.verify(token, scKi);
            const user = await User.findById(userID.userId);
            const NewUser = user;
            //To check if addresses is having same type of address or not
            const newAddressType = address.type; // Type of the new address to be added
            const existingAddressTypes = NewUser.addresses.map(addr => addr.type);

            if (existingAddressTypes.includes(newAddressType)) {
                return res.json({ code: '201', message: 'Address type already exist!' });
            }

            NewUser.addresses.push({
                name: address.name,
                mobile: address.mobile,
                buildApart: address.buildApart,
                addLine1: address.addLine1,
                addLine2: address.addLine2,
                pinCode: address.pinCode,
                state: address.state,
                type: address.type,
            })

            await NewUser.save();
            return res.json({ code: '200', message: 'Address added successfully!' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });

        }
    }

}
module.exports = addressController;