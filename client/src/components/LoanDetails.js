export default function LoanDetails({amount, emiDuration, startDate, expiryDate, fixed, 
    payableAmount, interest}) {
    return (
        <div className="details">
            <h2 className="details-1">💰 Principle amount: {amount}</h2>
            <h2 className="details-1">⌛ Emi Duration: {emiDuration}</h2>
            <h2 className="details-1">📅 Duration {new Date(startDate).toDateString()} ↔ {new Date(expiryDate).toDateString()}</h2>
            <h2 className="details-1">🧧 Loan Type: {fixed?"fixed":"float"}</h2>
            <h2 className="details-1">📜 Total payable amount: {payableAmount}</h2>
            <h2 className="details-1">🧩 Interest: {interest}</h2>
        </div>
    )
}
