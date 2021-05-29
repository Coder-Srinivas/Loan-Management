import Title from '../components/Title';
import StartScreen from '../components/StartScreen';
import { ReactComponent as Pic } from '../assets/home.svg';

const Home = () => {
    return(
        <div className="home">
            <Pic/>
            <div className="home-next">
                <Title title = "Loan Application"/>
                <StartScreen/>
            </div>  
        </div>
    )
}

export default Home
