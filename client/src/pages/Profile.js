import { useEffect, useState, useContext } from 'react';
import Loading from './Loading';
import DashBoard from '../components/Dashboard';
import { UserContext } from '../hooks/UserContext';
const { getLoans } = require('../services/loan.service');
const { logout } = require('../services/auth.service');

const Profile = (props) => {

    const [loans, setLoans] = useState(true);
    const [loading, setLoading] = useState(true);
    const {user} = useContext(UserContext);

    useEffect(() => {
        getLoans().then((response) => {
            setLoans(response.loans);
            setLoading(false);
        });
    }, [])
    return(
        <div>
            {
            !loading ? <>           
                <div>
                    <div className="logout-container">
                        <button onClick={() => {logout(); window.location.reload();}} className="button">Logout</button>
                    </div>
                    <DashBoard owner={user.username} loanlist={loans}/>
                </div>
            </> :  <Loading/>}
        </div>
    )
}

export default Profile
