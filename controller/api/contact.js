const Contact = require("../../models/contact.model");

const contactAPIPostController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, message, phone } = req.body;
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        status: 400,
        massage: "Please fill all required fields",
      });
    }
    const contact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    await contact.save();
    return res.status(201).json({
      success: true,
      status: 201,
      massage: "Message Send Successfully",
      contact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  contactAPIPostController,
};
