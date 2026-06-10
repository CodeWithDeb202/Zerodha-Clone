function Universe() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="row mt-5 mb-5 p-3">
                    <div className="col-4">
                        <img src="media\images\smallcaseLogo.png" alt="smallcase" />
                        <p className="text-small text-muted">Thematic investment platform</p>
                    </div>
                    <div className="col-4">
                        <img style={{width:"40%"}} src="media\images\streakLogo.png" alt="streak" />
                        <p className="text-small text-muted">Algo & strategy platform</p>
                    </div>
                    <div className="col-4">
                        <img className="mb-2 mt-2" style={{width:"40%"}} src="media\images\sensibullLogo.svg" alt="sensibull" />
                        <p className="text-small text-muted">Options trading platform</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img style={{width:"40%"}} src="media\images\zerodhaFundhouse.png" alt="zerodhaFund" />
                        <p className="text-small text-muted">Asset management</p>
                    </div>
                    <div className="col-4">
                        <img src="media\images\goldenpiLogo.png" alt="goldenPi" />
                        <p className="text-small text-muted">Bonds trading platform</p>
                    </div>
                    <div className="col-4">
                        <img style={{width:"40%"}} src="media\images\dittoLogo.png" alt="smallcase" />
                        <p className="text-small text-muted">Insurance</p>
                    </div>
                </div>

                <button className="mt-5 mb-5 btn btn-primary m-auto p-2" style={{width: "10%", fontSize: "1rem"}}>Signup Now</button>

            </div>
        </div>
    );
}

export default Universe;