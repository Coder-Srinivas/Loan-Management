import Title from '../components/Title';
import StartScreen from '../components/StartScreen';
// import Loan from "./CreateLoan";
// import Applied from "./Applied";

const Home = () => {

    return(
        <div className="home">
            <div className="home-next">
            <Title 
                title = "Loan Application"/>
             <StartScreen/>
            </div>   
           
            {/* <Loan/>
            <Applied/> */}

        </div>
    )
}

export default Home
