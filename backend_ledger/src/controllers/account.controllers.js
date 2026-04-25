const accountModel = require("../models/account.model.js");




/**
 * - Create account controller
 * - POST /api/accounts/
 */
async function createAccountController(req, res) {
  const user = req.user;

  const account = await accountModel.create({
    user: user._id,
  });

  res.status(201).json({
    account,
  });
}




/**
 * - Get User Accounts Controller
 * - GET /api/accounts/
 */
async function getUserAccountsController(req, res) {
  const user = req.user;

  const accounts = await accountModel.find({
    user: user._id,
  });

  res.status(200).json({
    accounts,
  });
}




/**
 * - Get Account Balance Controller
 * - GET /api/accounts/balance/:accountId
 */
async function getAccountBalanceController(req, res) {
  const { accountId } = req.params;
  const id = req.user._id;

  const account = await accountModel.findOne({
    _id: accountId,
    user: id,
  });

  if (!account) {
    return res.status(404).json({
      message: "Account not found",
    });
  }

  const balance = await account.getBalance();

  res.status(200).json({
    accountId: account._id,
    balance: balance,
  });
}




module.exports = {
  createAccountController,
  getUserAccountsController,
  getAccountBalanceController,
};
