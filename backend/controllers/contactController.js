// import Lead from "../models/Lead.js";

// export const createLead = async (req, res) => {

//   try {

//     const { name, email, company, message } = req.body;

//     const newLead = new Lead({
//       name,
//       email,
//       company,
//       message
//     });

//     await newLead.save();

//     res.status(200).json({
//       success: true,
//       message: "Lead saved successfully"
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message
//     });

//   }

// };

import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {

  console.log("Incoming lead:", req.body);

  try {

    const { name, email, company, message } = req.body;

    const newLead = new Lead({
      name,
      email,
      company,
      message
    });

    await newLead.save();

    console.log("Lead saved to MongoDB");

    res.status(200).json({
      success: true,
      message: "Lead saved successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};