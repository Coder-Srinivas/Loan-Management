const mongoose = require('mongoose');
const { Schema } = mongoose;

// Loan Schema 
const LoanSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    emiDuration: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    fixed: {
        type: Boolean,
        required: true
    },
    payableAmount: {
        type: Number,
        required: true
    },
    interest: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
});


const Loan = mongoose.model("Loan", LoanSchema);

module.exports = Loan