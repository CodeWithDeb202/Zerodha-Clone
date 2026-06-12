import Menu from "./Menu";

function TopBar(){
    return(
        <div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index">NIFTY 50</p>
                    <p className="index-point">{19,876.20}</p>
                    <p className="percent">+0.25%</p>
                </div>
                <div className="sensex">
                    <p className="index">SENSEX</p>
                    <p className="index-point">{45,678.90}</p>
                    <p className="percent">-0.15%</p>
                </div>
            </div>

            <Menu />
        </div>
    )
};

export default TopBar;