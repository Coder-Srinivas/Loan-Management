const express = require('express');
const Loan = require('../database/models/loan.model');
const User = require('../database/models/user.model');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { calcAmount } = require('../utilities/loan');

// Creating new loan
router.post("/new/loan", auth, async (req, res) => {
    try{
        const {payableAmount, interest} = calcAmount(parseInt(req.body.amount), req.body.emiDuration/12);
        const date = new Date(req.body.startDate);
        const expiryDate = new Date(date.setMonth(date.getMonth() + req.body.emiDuration/12));
        const loan = new Loan({
            owner: req.id,
            ...req.body,
            payableAmount,
            interest,
            expiryDate
        });
        await loan.save();
        res.status(201).send({
            success: true,
            message: "New loan created",
            loan,
        })
    }catch(error){
        const message = error.message;
        res.status(400).send({
            success: false,
            message
        });
    }
})

// Fetching all loans created by the user
router.get("/loans", auth, async (req, res) => {

    try{
        const user = await User.findById(req.id);
        await user.populate('loans').execPopulate();

        res.status(201).send({
            success: true,
            message: "Fetched all available loans created by the user",
            loans: user.loans
        })
    }catch(error){
        const message = error.message;
        res.status(400).send({
            success: false,
            message
        });
    }
})


module.exports = router
