function Education() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="\media\images\education.svg" alt="education" style={{width:"70%"}} />
                </div>
                <div className="col-6 mb-5">
                    <h1 className="mb-4 fs-3">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a style={{textDecoration:"none"}} href="/">Versity <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a style={{textDecoration:"none"}} href="/">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;