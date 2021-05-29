const calcAmount = (principal, time) => {
    const rateOfInterest = 5/100;
    //Calculating Simple Interest
    const interest = (principal * time * rateOfInterest);
    const amount = principal + interest;

    return {
        interest,
        payableAmount: amount
    }
}

module.exports = { calcAmount };