function Hero() {
    return (
        <section className="container-fluid" id="supportHero">

            <div id="supportWrapper">
                <h3 className="fs-5">Support Portal</h3>
                <a className="text-white" style={{fontSize:"0.7rem"}} href="">Track Tickets</a>
            </div>

            <div className="row" style={{margin:"3rem 9rem"}}>
                <div className="col-6">
                    <h2 className="fs-4" style={{lineHeight:"1.8"}}>Search for an answer to browse <br /> help topics to create a ticket</h2>
                    <input style={{padding:"1rem", width:"100%" , fontSize:"0.8rem", borderRadius:"0.6rem" , border:"none"}} type="text" placeholder="Eg: how do i activate F&O, why is my order getting reject..." />
                    <div >
                        <a className="text-white" style={{fontSize:"0.7rem", marginRight:"1rem"}} href="">Track account opening</a>
                        <a className="text-white" style={{fontSize:"0.7rem", marginRight:"1rem"}} href="">Track segment</a>
                        <br />
                        <a className="text-white" style={{fontSize:"0.7rem", marginRight:"1rem"}} href="">activation</a>
                        <a className="text-white" style={{fontSize:"0.7rem", marginRight:"1rem"}} href="">intraday margins</a>
                        <a className="text-white" style={{fontSize:"0.7rem", marginRight:"1rem"}} href="">Kite user manual</a>
                    </div>
                </div>
                <div className="col-6">
                    <h2 style={{marginLeft:"4rem"}} className="fs-5">Featured</h2>
                    <ol type="number">
                        <li style={{marginLeft:"4rem"}} ><a style={{color:"white" }} href="">Current Takeovers and Delisting - january 2</a></li>
                        <li style={{marginLeft:"4rem"}}><a style={{color:"white" }} href="">Latest intraday leverages - MIS & CO </a></li>
                    </ol>
                </div>
            </div>


        </section>
    );
}

export default Hero;