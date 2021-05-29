import Details from "./LoanDetails";
import Title from "./Title";

//the array of loans is taken as the prop here, the title from the array is displayed here
 //and the rest of the details are sent as props to loandetails to further get rendered

export default function Loans({loans=[]}) {
    return (
        <div className="loans">
            {loans.map((loan, index) => {
            return (
              <div className="loans-container" key={index}>
                <Details amount={loan.amount} emiDuration={loan.emiDuration} startDate={loan.startDate} 
                expiryDate={loan.expiryDate} fixed={loan.fixed} payableAmount={loan.payableAmount} interest={loan.interest}/>
              </div>
            );
          })}
            <Title title=""/>
        </div>
    )
}
