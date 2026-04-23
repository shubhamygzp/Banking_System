const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const transactionController = require("../controllers/transaction.controllers.js");


const router = express.Router();



/**
 * - POST /api/transactions/
 * - Create a new transaction
 * - Protected Route
 */
router.post("/", authMiddleware.authMiddleware, transactionController.createTransaction);




module.exports = router;