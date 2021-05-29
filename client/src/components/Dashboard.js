import Loans from "./Loans";
import Title from "./Title";
import { useHistory } from 'react-router-dom';

//loanlist is an array of objects which has the user's loan details
export default function Dashboard({owner, loanlist}) {

    let history = useHistory();
    return (
        <div className="dash">
            <div className="dash-container">
                <div className="dash-container--1">
                    <Title title={ `Welcome, ${owner}!` }/>
                </div>
                <div className="dash-container--2">
                    <Loans loans={loanlist}/>
                </div>
                <div className="dash-container--3">
                    <button onClick={() => {history.push('/new/loan')}} className="button">➕ Loan</button>
                </div>
            </div>
        </div>
    )
}
