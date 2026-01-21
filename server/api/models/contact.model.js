const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String
    },
    role: {
      type: String
    },
    companyName: {
      type: String
    },
    companyWebsite: {
      type: String
    },
    companySize: {
      type: String
    },
    annualRevenue: {
      type: String
    },
    projectBudget: {
      type: String
    },
    services: {
      type: String
    },
    message: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
