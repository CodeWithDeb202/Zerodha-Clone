import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { API_URL } from "../config";

function App() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/allOrders`)
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.log("Error fetching orders:", err);
            });
    }, []);

    const username = user?.username || "User";
    const email = user?.email || "No email found";
    const avatarText = username.slice(0, 2).toUpperCase();
    const buyCount = orders
        .filter((order) => order.mode === "BUY")
        .reduce((total, order) => total + Number(order.qty || 0), 0);
    const sellCount = orders
        .filter((order) => order.mode === "SELL")
        .reduce((total, order) => total + Number(order.qty || 0), 0);

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-photo">{avatarText}</div>
                <div>
                    <h2>{username}</h2>
                    <p>{email}</p>
                </div>
            </div>

            <div className="profile-stats">
                <div className="profile-stat">
                    <span>Total orders</span>
                    <h3>{orders.length}</h3>
                </div>
                <div className="profile-stat buy-stat">
                    <span>Stocks bought</span>
                    <h3>{buyCount}</h3>
                </div>
                <div className="profile-stat sell-stat">
                    <span>Stocks sold</span>
                    <h3>{sellCount}</h3>
                </div>
            </div>
        </div>
    )
};

export default App;
