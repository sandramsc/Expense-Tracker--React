//@desc Get all transactions
//@route GET /api/v1/transactions
//@access public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

//@desc Add transaction
//@route POST /api/v1/transactions
//@access public
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}

//@desc Delete transactions
//@route GET /api/v1/transactions/:id
//@access public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELTE transaction');
}