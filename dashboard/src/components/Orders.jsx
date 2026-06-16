import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allOrders')
            .then(res => {
                setAllOrders(res.data);
            }).catch(err => {
                console.log('Error fetching orders:', err);
            });
    }, []);
    return (
        <>
            <div className="orders">
                {!allOrders.length ? (
                    <div className="no-orders">
                        <p>You haven't placed any orders today</p>
                        <Link to={"/"} className="btn">
                            Get started
                        </Link>
                    </div>
                ) : (
                    <>
                        <h3 className="title">Orders ({allOrders.length})</h3>
                        <div className="order-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Instrument</th>
                                        <th>Qty.</th>
                                        <th>Price</th>
                                        <th>Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allOrders.map((order, index) => (
                                        <tr key={order._id || index}>
                                            <td>{order.name}</td>
                                            <td>{order.qty}</td>
                                            <td>{Number(order.price).toFixed(2)}</td>
                                            <td>
                                                <span className={`order-mode ${order.mode?.toUpperCase() === 'BUY' ? 'buy-mode' : 'sell-mode'}`}>
                                                    {order.mode?.toUpperCase()}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </>
    )
};

export default Orders;
