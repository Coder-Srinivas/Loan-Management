const calcAmount = (principal, time) => {
    const rateOfInterest = 5/100;

    //Calculating Simple Interest
    const interest = (principal * time * rateOfInterest)/100;
    const amount = principal + interest;

    return {
        interest,
        amount
    }
}

module.exports.calcAmount = calcAmount;