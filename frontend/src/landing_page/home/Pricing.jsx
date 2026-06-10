function Pricing() {
    return ( 
        
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-4 fs-3">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration:"none"}} href="/">See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1 className="fs-3 mb-4">₹0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col border p-3">
                            <h1 className="fs-3 mb-4">₹20</h1>
                            <p className="fs-6">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Pricing;