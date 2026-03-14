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

import Contact from "../models/Contact.js";

export const submitContact = async (req,res)=>{

console.log("Incoming lead:", req.body);

try{

const contact = new Contact(req.body);

await contact.save();

res.status(200).json({
success:true,
message:"Saved to database"
});

}catch(err){

console.error(err);

res.status(500).json({
success:false,
message:"Server error"
});

}

}