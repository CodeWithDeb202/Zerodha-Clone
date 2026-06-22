import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Verticalgraph } from './Verticalgraph';
import { API_URL } from '../config';


function Holdings() {

    const [allHoldings, setAllHoldings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/allHoldings`)
            .then(res => {
                const holdingsOnly = res.data.filter((stock) => {
                    return stock.avg !== undefined && stock.net !== undefined && stock.day !== undefined && !stock.mode;
                });

                setAllHoldings(holdingsOnly);
            }).catch(err => {
                console.log('Error fetching holdings:', err);
            });
    }, []);

    const handleSellClick = async (stock) => {
        try {
            await axios.post(`${API_URL}/newOrder`, {
                name: stock.name,
                qty: stock.qty,
                price: stock.price,
                mode: 'SELL',
            });

            await axios.delete(`${API_URL}/holding/${stock._id}`);
            setAllHoldings((currentHoldings) => {
                return currentHoldings.filter((holding) => holding._id !== stock._id);
            });

            navigate('/orders');
        } catch (err) {
            console.log('Error placing sell order:', err);
        }
    };

    const labels = allHoldings.map((subArray) => subArray["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: allHoldings.map((stock) => stock.price ),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <>
            <h3 className="title">Holdings ({allHoldings.length})</h3>
            <div className="order-table">
                <table>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Curr. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                        <th>Action</th>
                    </tr>
                    {allHoldings.map((stock, index) => {

                        const currVal = stock.price * stock.qty;
                        const isProfit = currVal - (stock.avg * stock.qty) >= 0;
                        const profClass = isProfit ? 'profit' : 'loss';
                        const dayClass = stock.isLoss ? 'loss' : 'profit';
                        return (

                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{currVal.toFixed(2)}</td>
                                <td className={profClass}>
                                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                                </td>
                                <td className={profClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="sell-order-btn"
                                        onClick={() => handleSellClick(stock)}
                                    >
                                        Sell
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>29,875.<span>55</span>{' '}</h5>
                    <p>Total investment</p>
                </div>

                <div className="col">
                    <h5>31,875.<span>95</span>{' '}</h5>
                    <p>Current value</p>
                </div>

                <div className="col">
                    <h5>1,553.40 (+5.25%)</h5>
                    <p>P&L</p>
                </div>
            </div>
            <Verticalgraph data={data} />
        </>
    )
};

export default Holdings;
