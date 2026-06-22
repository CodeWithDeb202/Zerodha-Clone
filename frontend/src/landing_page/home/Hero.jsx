import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="/media/images/homeHero.png" alt="Home hero image" className="mb-5"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className="mt-3 mb-5 btn btn-primary m-auto" style={{width: "20%", fontSize: "1.25rem"}}>
                    <Link style={{textDecoration:"none", color:"white"}} to={"/signup"}>
                        Sign up Now
                    </Link>
                </button>
            </div>

        </div>
    );
}

export default Hero;