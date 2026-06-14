import {Routes, Route} from "react-router-dom";
import Watchlist from "./Watchlist";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "./App";


function Dashboard(){
    return(
        <div className="dashboard-container">
            <Watchlist />
            <div className="content">
                <Routes>
                    <Route exact path='/' element={<Summary />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/holdings' element={<Holdings />} />
                    <Route path='/positions' element={<Positions />} />
                    <Route path='/funds' element={<Funds />} />
                    <Route path='/app' element={<App />} />
                </Routes>
            </div>

        </div>
    )
};

export default Dashboard;