const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const accountController = require("../controllers/account.controllers.js");


const router = express.Router();


/**
 * - POST /api/accounts/
 * - Create a new account
 * - Protected Route
 */
router.post("/", authMiddleware.authMiddleware, accountController.createAccountController);



/**
 * - GET /api/accounts/
 * - Get all accounts of logged-in user
 * - Protected Route
 */
router.get("/", authMiddleware.authMiddleware, accountController.getUserAccountsController);




/**
 * - GET /api/accounts/balance/:accountId
 * - Get balance of particular account of the logged-in user
 * - Protected Route 
 */
router.get("/balance/:accountId", authMiddleware.authMiddleware, accountController.getAccountBalanceController);



module.exports = router;