import { useEffect, useState } from 'react';
const { getLoans } = require('../services/loan.service');

const Profile = (props) => {

    const [loans, setLoans] = useState([]);

    useEffect(() => {
        getLoans().then((response) => {
            setLoans(response.loans);
        });
    }, [])

    return(
        <div>
            <h1>Profile Page</h1>
            <div>
                {loans.map((loan, index) => {
                    return (
                        <div key={index}>
                            {console.log(loan)}
                        </div>
                    )
                })}
            </div>

            <button onClick={() => {props.history.push('/new/loan')}}>Create Loan</button> 
        </div>
    )
}

export default Profile
