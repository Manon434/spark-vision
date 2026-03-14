import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {

  try {

    const { name, email, company, message } = req.body;

    const newLead = new Lead({
      name,
      email,
      company,
      message
    });

    await newLead.save();

    res.status(200).json({
      success: true,
      message: "Lead saved successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};