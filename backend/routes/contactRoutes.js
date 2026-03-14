// import express from "express";
// import { createLead } from "../controllers/contactController.js";

// const router = express.Router();

// router.post("/contact", createLead);

// export default router;

import express from "express";
import { submitContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", submitContact);

export default router;