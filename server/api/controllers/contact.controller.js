const Contact = require("../models/contact.model");

const createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: contact
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContact
};
