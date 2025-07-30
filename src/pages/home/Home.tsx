import './home.scss'
import Navbar from "../../components/navbar/Navbar.tsx";
import Moves from "../../components/moves/Moves.tsx";

const Home = () => {

    return (
        <div className="home">
            <Navbar />
            <Moves/>
        </div>
    )
};

export default Home;