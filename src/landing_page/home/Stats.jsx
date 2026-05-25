function Stats() {
    return ( 
        <div className="container">
            <div className="row p-5">
                <div className="col-6">
                    <h1 className="fs-2 mb-3">Trust with confidence</h1>

                    <h3 className="fs-4">Customer-first always</h3>
                    <p className="text-muted mb-4">That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>

                    <h3  className="fs-4">No spam or gimmicks</h3>
                    <p className="text-muted mb-4">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className="fs-4">The Zerodha universe</h3>
                    <p className="text-muted mb-4">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className="fs-4">Do better with money</h3>
                    <p className="text-muted mb-4">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    

                </div>

                <div className="col-6">
                    <img src="\media\images\ecosystem.png" alt="Stats image" style={{width: "90%"}} />
                    <div>
                        <a className="mx-5" style={{textDecoration:"none"}} href="/">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a className="mx-5" style={{textDecoration:"none"}} href="/">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Stats;