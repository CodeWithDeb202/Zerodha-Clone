import {Link} from "react-router-dom";

function Funds(){
    return(
        <>
            <div className="funds">
                <p>Instant, Zero-cost fund transfers with UPI</p>
                <Link className="btn btn-green">Add funds</Link>
                <Link className="btn btn-blue">Withdraw</Link>
            </div>
            <div className="row">
                <div className="col">
                    <span>
                        <p>Equity</p>
                    </span>
                </div>
            </div>
        </>
    )
};

export default Funds;