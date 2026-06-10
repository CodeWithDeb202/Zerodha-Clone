import App from './App';
import Dashboard from './Dashboard';
import Fund from './Fund';
import Holdings from './Holdings';
import Menu from './Menu';
import Order from './Order';
import Positions from './Positions';
import Summary from './Summary';
import Topbars from './Topbars';
import WatchList from './WatchList';

function Home() {
    return(
        <>

            <App />
            <Dashboard />
            <Fund />
            <Holdings />
            <Menu />
            <Order />
            <Positions />
            <Summary />
            <Topbars />
            <WatchList />

        
        </>
    )
}

export default Home;
