import Footer from "../Footer";
import Navbar from "../Navbar";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";

function SupportPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <CreateTicket />
            <Footer />
        </>
    );
}

export default SupportPage;