function Hero() {
    return ( 
        <div className="container text-center mt-5">
            <div className="row border-bottom">
                <h1>Pricing</h1>
                <h3 className="mb-5 fs-6 text-muted mt-3">Free equity investments and flat ₹20 traday and F&O trades</h3>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-4">
                    <img src="media\images\pricingEquity.svg" alt="Price Equity" />
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</p>
                </div>

                <div className="col-4">
                    <img src="media\images\intradayTrades.svg" alt="intradayTrades" />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>

                <div className="col-4">
                    <img src="media\images\pricingEquity.svg" alt="Price Equity" />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;