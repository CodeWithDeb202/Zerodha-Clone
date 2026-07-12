import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { useAuth } from "../hooks/useAuth";

function Home(){
    const { isCheckingAuth } = useAuth();

    if (isCheckingAuth) {
        return <div className="auth-loading">Checking your session...</div>;
    }

    return(
        <>
            <Topbar />
            <Dashboard />
        </>
    )
};

export default Home;
