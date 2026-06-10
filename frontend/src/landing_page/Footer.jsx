function Footer() {
    return (
        <footer style={{backgroundColor: "rgb(240, 240, 240)"}}>
            <div className="container border-top mt-5 pt-5">
                <div className="row">
                    <div className="col">
                        <img style={{ width: "40%" }} src="\media\images\logo.svg" alt="Logo" />
                        <p className="mb-4 mt-3" style={{fontSize:"0.8rem"}}>© 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>

                        <div>
                            
                            <a href="#" className="text-muted footer-icon"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" className="text-muted footer-icon"><i class="fa-brands fa-square-facebook"></i></a>
                            <a href="#" className="text-muted footer-icon"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#" className="text-muted footer-icon"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="text-muted footer-icon"><i class="fa-brands fa-telegram"></i></a>
                            
                        </div>

                    </div>
                    <div className="col">
                        <h5 className="mb-4">Company</h5>

                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">About</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Products</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Pricing</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Referral programme</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Careers</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Zerodha.tech</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Press & media</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Zerodha cares (CSR)</a>
                        </p>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">Support</h5>

                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Contact</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Support portal</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Z-Connect blog</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">List of charges</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Downloads & resources</a>
                        </p>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">Account</h5>

                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Open an account</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">Fund transfer</a>
                        </p>
                        <p className="mb-2.5">
                            <a href="#" className="text-muted text-decoration-none">60 day challenge</a>
                        </p>

                    </div>
                </div>

                <div className="mt-3">
                    <p className="text-muted" style={{fontSize:"0.8rem"}}>Zerodha Broking Ltd.: Member of NSE & BSE  SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd.  SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025  SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p className="text-muted" style={{fontSize:"0.8rem"}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p className="text-muted" style={{fontSize:"0.8rem"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p className="text-muted mb-0 pb-3" style={{fontSize:"0.8rem"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;